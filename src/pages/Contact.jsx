import React, { useState } from 'react'
import './Contact.css'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        website: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError('');
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json().catch(() => ({}));

            if (!response.ok) {
                throw new Error(result.error || 'Could not send your message.');
            }

            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: '',
                website: '',
            });
        } catch (error) {
            setSubmitError(error.message || 'Could not send your message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='contact-container'>
            {/* Hero Section */}
            <div className='contact-hero'>
                <div className='hero-content'>
                    <h1>Get In Touch</h1>
                    <p>Ready to begin your wellness journey? We'd love to hear from you.</p>
                </div>
            </div>

            {/* Main Contact Content */}
            <div className='contact-main'>
                <div className='contact-grid'>
                    {/* Contact Information */}
                    <div className='contact-info'>
                        <h2>Contact Information</h2>
                        
                        <div className='info-item'>
                            <div className='info-icon'>📍</div>
                            <div className='info-content'>
                                <h3>Visit Us</h3>
                                <p>
                                    1563 Westwood Blvd, Los Angeles, CA 91605
                                </p>
                            </div>
                        </div>

                        <div className='info-item'>
                            <div className='info-icon'>💬</div>
                            <div className='info-content'>
                                <h3>Social Media</h3>
                                <p>Instagram: @bliss_westwood</p>
                                <a href="https://www.instagram.com/bliss_westwood/" target="_blank" rel="noopener noreferrer" className="info-link">
                                    👉 Click to visit our Instagram page
                                </a>
                            </div>
                        </div>

                        <div className='info-item'>
                            <div className='info-icon'>📞</div>
                            <div className='info-content'>
                                <h3>Call or Text Us</h3>
                                <p>(310) 351-1863</p>
                            </div>
                        </div>

                        <div className='info-item'>
                            <div className='info-icon'>✉️</div>
                            <div className='info-content'>
                                <h3>Email Us</h3>
                                <p>blissbodyandbeautyspa@gmail.com</p>
                            </div>
                        </div>

                        <div className='info-item'>
                            <div className='info-icon'>🕒</div>
                            <div className='info-content'>
                                <h3>Hours</h3>
                                <p>
                                    Monday - Sunday: 10:00 AM - 9:00 PM   
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className='contact-form-section'>
                        <h2>Send Us a Message</h2>
                        {isSubmitted ? (
                            <div className='success-message'>
                                <h3>Thank You!</h3>
                                <p>Your message has been sent successfully. We'll get back to you soon!</p>
                            </div>
                        ) : (
                            <form className='contact-form' onSubmit={handleSubmit}>
                                <div className='honeypot' aria-hidden='true'>
                                    <label htmlFor='website'>Website</label>
                                    <input
                                        type='text'
                                        id='website'
                                        name='website'
                                        tabIndex={-1}
                                        autoComplete='off'
                                        value={formData.website || ''}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='name'>Full Name *</label>
                                    <input
                                        type='text'
                                        id='name'
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder='Enter your full name'
                                    />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='email'>Email Address *</label>
                                    <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder='Enter your email address'
                                    />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='phone'>Phone Number</label>
                                    <input
                                        type='tel'
                                        id='phone'
                                        name='phone'
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder='Enter your phone number'
                                    />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='service'>Service Interest</label>
                                    <select
                                        id='service'
                                        name='service'
                                        value={formData.service}
                                        onChange={handleChange}
                                    >
                                        <option value=''>Select a service</option>
                                        <option value='body-scrub'>Body Scrub</option>
                                        <option value='body-wraps'>Body Wraps</option>
                                        <option value='wood-therapy'>Wood Therapy Body Sculpting</option>
                                        <option value='post-surgery'>Post-Surgery Care</option>
                                        <option value='facial'>Facial</option>
                                        <option value='consultation'>Consultation</option>
                                    </select>
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='message'>Message *</label>
                                    <textarea
                                        id='message'
                                        name='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows='5'
                                        placeholder='Tell us about your wellness goals or any questions you have...'
                                    ></textarea>
                                </div>

                                {submitError ? (
                                    <p className='form-error' role='alert'>{submitError}</p>
                                ) : null}

                                <button type='submit' className='submit-btn' disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending…' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Map Section */}
                <div className='map-section'>
                    <h2>Find Us</h2>
                    <div className='map-placeholder'>
                        <div className='map-content'>
                            <div className='map-icon'>🗺️</div>
                            <h3>Interactive Map</h3>
                            <p>📍 1563 Westwood Blvd, Los Angeles, CA 91605</p>
                            <a 
                                href="https://www.google.com/maps/dir/?api=1&destination=1563+Westwood+Blvd,+Los+Angeles,+CA+91605" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='directions-btn'
                            >
                                👉 Get Directions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}