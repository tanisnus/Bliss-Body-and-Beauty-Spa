const SERVICE_LABELS = {
  'body-scrub': 'Body Scrub',
  'body-wraps': 'Body Wraps',
  'wood-therapy': 'Wood Therapy Body Sculpting',
  'post-surgery': 'Post-Surgery Care',
  facial: 'Facial',
  consultation: 'Consultation',
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function json(status, body) {
  return Response.json(body, { status })
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function onRequestPost(context) {
  const apiKey = context.env.RESEND_API_KEY
  if (!apiKey) {
    return json(500, { error: 'Email is not configured yet.' })
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

  const name = String(payload.name || '').trim()
  const email = String(payload.email || '').trim()
  const phone = String(payload.phone || '').trim()
  const service = String(payload.service || '').trim()
  const message = String(payload.message || '').trim()

  if (!name || !email || !message) {
    return json(400, { error: 'Name, email, and message are required.' })
  }

  if (!EMAIL_RE.test(email) || name.length > 200 || message.length > 5000) {
    return json(400, { error: 'Please check your details and try again.' })
  }

  const to = context.env.CONTACT_TO_EMAIL || 'blissbodyandbeautyspa@gmail.com'
  const serviceLabel = SERVICE_LABELS[service] || service || 'Not specified'

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Bliss Body and Beauty Spa <onboarding@resend.dev>',
      to: [to],
      reply_to: email,
      subject: `New website message from ${name}`,
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
