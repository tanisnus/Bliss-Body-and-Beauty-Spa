const SERVICE_LABELS = {
  'body-scrub': 'Body Scrub',
  'body-wraps': 'Body Wraps',
  'wood-therapy': 'Wood Therapy Body Sculpting',
  'post-surgery': 'Post-Surgery Care',
  facial: 'Facial',
  consultation: 'Consultation',
}

const EMAIL_RE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/
const PHONE_RE = /^[0-9+().\s-]{0,40}$/
const MAX_NAME = 120
const MAX_MESSAGE = 4000
const MAX_BODY_BYTES = 20_000
const RATE_LIMIT = 5
const RATE_WINDOW_SECONDS = 600

function json(status, body, headers = {}) {
  return Response.json(body, { status, headers })
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function sanitizeHeader(value) {
  return String(value)
    .replace(/[\r\n\0]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

async function allowRequest(request) {
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown'
  const cacheKey = new Request(`https://contact-rate-limit.invalid/${encodeURIComponent(ip)}`)

  try {
    const cache = caches.default
    const existing = await cache.match(cacheKey)
    const count = existing ? Number.parseInt(await existing.text(), 10) || 0 : 0

    if (count >= RATE_LIMIT) {
      return false
    }

    await cache.put(
      cacheKey,
      new Response(String(count + 1), {
        headers: { 'Cache-Control': `max-age=${RATE_WINDOW_SECONDS}` },
      }),
    )
    return true
  } catch {
    return true
  }
}

export async function onRequestPost(context) {
  const apiKey = context.env.RESEND_API_KEY
  if (!apiKey) {
    return json(500, { error: 'Email is not configured yet.' })
  }

  const contentLength = Number(context.request.headers.get('content-length') || 0)
  if (contentLength > MAX_BODY_BYTES) {
    return json(413, { error: 'Please check your details and try again.' })
  }

  if (!(await allowRequest(context.request))) {
    return json(
      429,
      { error: 'Too many messages. Please wait a few minutes and try again.' },
      { 'Retry-After': String(RATE_WINDOW_SECONDS) },
    )
  }

  let payload
  try {
    payload = await context.request.json()
  } catch {
    return json(400, { error: 'Invalid request.' })
  }

  if (payload.website) {
    return json(200, { ok: true })
  }

  const name = sanitizeHeader(payload.name || '')
  const email = sanitizeHeader(payload.email || '').toLowerCase()
  const phone = sanitizeHeader(payload.phone || '')
  const service = sanitizeHeader(payload.service || '')
  const message = String(payload.message || '').replace(/\0/g, '').trim()

  if (!name || !email || !message) {
    return json(400, { error: 'Name, email, and message are required.' })
  }

  if (
    !EMAIL_RE.test(email) ||
    email.length > 254 ||
    name.length > MAX_NAME ||
    message.length > MAX_MESSAGE ||
    (phone && !PHONE_RE.test(phone))
  ) {
    return json(400, { error: 'Please check your details and try again.' })
  }

  const to = context.env.CONTACT_TO_EMAIL || 'blissbodyandbeautyspa@gmail.com'
  const serviceLabel = SERVICE_LABELS[service] || 'Not specified'

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Bliss Body and Beauty Spa <hello@send.blissbodyandbeautyspa.com>',
      to: [to],
      reply_to: email,
      subject: `Bliss Body and Beauty Spa - New website message from ${name}`,
      html: `
        <h2>New contact form message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
        <p><strong>Service:</strong> ${escapeHtml(serviceLabel)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
    }),
  })

  if (!resendResponse.ok) {
    return json(502, { error: 'Could not send your message. Please try again or email us directly.' })
  }

  return json(200, { ok: true })
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
