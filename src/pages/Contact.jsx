import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, User } from 'lucide-react';
import '../styles/contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState(null);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email is required';
        if (!formData.phone.trim() || formData.phone.length < 10) newErrors.phone = 'Valid phone number is required';
        if (!formData.service) newErrors.service = 'Please select a service';
        if (!formData.message.trim() || formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus(null);

        if (validate()) {

            setFormStatus('loading');
            setTimeout(() => {
                setFormStatus('success');
                setFormData({
                    name: '', email: '', phone: '', company: '', service: '', budget: '', message: ''
                });
            }, 1000);
        } else {
            setFormStatus('error');
        }
    };

    return (
        <>
            <Helmet>
                <title>Contact Us | KK International</title>
                <meta name="description" content="Contact KK International for technology strategy and software solutions. Book a consultation or get a quote." />
            </Helmet>

            <div className="animate-fade-in">
                <section className="contact-header">
                    <div className="container">
                        <span className="section-badge">Get In Touch</span>
                        <h1 className="h1">Contact Us</h1>
                        <p className="text-muted" style={{ maxWidth: '600px', margin: '1rem auto 0', fontSize: '1.2rem' }}>
                            Ready to transform your business? Reach out to our experts for consultation, quotes, and support.
                        </p>
                    </div>
                </section>

                <section className="section" style={{ paddingTop: 0 }}>
                    <div className="container">
                        <div className="contact-grid">

                            <div className="contact-info-cards">
                                <div className="contact-card">
                                    <div className="contact-card-icon"><User size={24} /></div>
                                    <div className="contact-card-content">
                                        <h4>Direct Contact</h4>
                                        <p><strong>Managing Director:</strong> K. Dharmaraj</p>
                                    </div>
                                </div>

                                <div className="contact-card">
                                    <div className="contact-card-icon"><Phone size={24} /></div>
                                    <div className="contact-card-content">
                                        <h4>Phone & WhatsApp</h4>
                                        <a href="tel:+919884488747" style={{ display: 'block', marginBottom: '0.25rem' }}>+91 98844 88747</a>
                                        <p style={{ fontSize: '0.85rem' }}>Available for calls and WhatsApp messages.</p>
                                    </div>
                                </div>

                                <div className="contact-card">
                                    <div className="contact-card-icon"><Mail size={24} /></div>
                                    <div className="contact-card-content">
                                        <h4>Email</h4>
                                        <a
                                            href="mailto:kkintl.org@gmail.com"
                                            onClick={(e) => {
                                                const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                                                if (!isMobile) {
                                                    e.preventDefault();
                                                    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=kkintl.org@gmail.com", "_blank", "noopener,noreferrer");
                                                }
                                            }}
                                        >
                                            kkintl.org@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="contact-card">
                                    <div className="contact-card-icon"><MapPin size={24} /></div>
                                    <div className="contact-card-content">
                                        <h4>Office Address</h4>
                                        <p>
                                            MIG 47, 1st St, Ramapuram,<br />
                                            TNHB Colony, Velachery,<br />
                                            Chennai, Tamil Nadu 600042
                                        </p>
                                    </div>
                                </div>

                                <div className="contact-card">
                                    <div className="contact-card-icon"><Clock size={24} /></div>
                                    <div className="contact-card-content">
                                        <h4>Working Hours</h4>
                                        <p>Monday - Friday: 10:00 AM - 6:00 PM</p>
                                        <p>Saturday - Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>


                            <div className="contact-form-container">
                                <h3 className="h3">Request a Quote</h3>
                                <p className="text-muted" style={{ marginBottom: '2rem' }}>Fill out the form below and our team will get back to you promptly.</p>

                                {formStatus === 'success' && (
                                    <div className="form-message success">
                                        Thank you! Your request has been successfully submitted. We will contact you soon.
                                    </div>
                                )}

                                {formStatus === 'error' && Object.keys(errors).length === 0 && (
                                    <div className="form-message error">
                                        Something went wrong. Please try again.
                                    </div>
                                )}

                                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                    <div className="form-grid">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="name">Full Name *</label>
                                            <input type="text" id="name" name="name" className="form-input" value={formData.name} onChange={handleChange} placeholder="John Doe" />
                                            {errors.name && <span className="error-text">{errors.name}</span>}
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="email">Email Address *</label>
                                            <input type="email" id="email" name="email" className="form-input" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                                            {errors.email && <span className="error-text">{errors.email}</span>}
                                        </div>
                                    </div>

                                    <div className="form-grid">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="phone">Phone Number *</label>
                                            <input type="tel" id="phone" name="phone" className="form-input" value={formData.phone} onChange={handleChange} placeholder="+91 9876543210" />
                                            {errors.phone && <span className="error-text">{errors.phone}</span>}
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="company">Company Name</label>
                                            <input type="text" id="company" name="company" className="form-input" value={formData.company} onChange={handleChange} placeholder="Your Company Ltd" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="service">Service Interested In *</label>
                                        <select id="service" name="service" className="form-select" value={formData.service} onChange={handleChange}>
                                            <option value="">Select a service...</option>
                                            <option value="Web Development">Website Development</option>
                                            <option value="App Development">Mobile App Development</option>
                                            <option value="E-Commerce">E-Commerce Solutions</option>
                                            <option value="Digital Marketing">Digital Marketing & SEO</option>
                                            <option value="WMS">Warehouse Management System</option>
                                            <option value="Other">Other Consultancy Services</option>
                                        </select>
                                        {errors.service && <span className="error-text">{errors.service}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="message">Message Specifications *</label>
                                        <textarea id="message" name="message" className="form-textarea" value={formData.message} onChange={handleChange} placeholder="Please provide details about your project requirements..." />
                                        {errors.message && <span className="error-text">{errors.message}</span>}
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary form-submit-btn"
                                        disabled={formStatus === 'loading'}
                                    >
                                        {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                </section>


                <section className="map-section">
                    <div className="container">
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3533261294247!2d80.2185362!3d13.01314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526715f20612bb%3A0xe721dedbf9b8e2b5!2sRamapuram%2C%20TNHB%20Colony%2C%20Velachery%2C%20Chennai%2C%20Tamil%20Nadu%20600042%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="KK International Office Location"
                            ></iframe>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}
