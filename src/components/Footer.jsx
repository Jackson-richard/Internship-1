import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer section-bg-dark">
            <div className="container">
                <div className="footer-grid">
                    {/* Company Info */}
                    <div className="footer-col brand-col">
                        <h3 className="footer-logo">KK <span>International</span></h3>
                        <p className="footer-desc">
                            Operating at the intersection of global business and digital innovation. We provide expert guidance in technology strategy, digital transformation, software solutions, and IT infrastructure.
                        </p>
                        <div className="footer-socials">
                            <a href="https://www.facebook.com/share/17g6nfAtga/" target="_blank" rel="noreferrer" aria-label="Facebook">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a>
                            <a href="#" target="_blank" rel="noreferrer" aria-label="Instagram">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/k-dharma-raj-737625408" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/"><ChevronRight size={16} /> Home</Link></li>
                            <li><Link to="/about"><ChevronRight size={16} /> About Us</Link></li>
                            <li><Link to="/services"><ChevronRight size={16} /> Services</Link></li>
                            <li><Link to="/portfolio"><ChevronRight size={16} /> Portfolio</Link></li>
                            <li><Link to="/contact"><ChevronRight size={16} /> Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Our Services</h4>
                        <ul className="footer-links">
                            <li><Link to="/services#web-development"><ChevronRight size={16} /> Web Development</Link></li>
                            <li><Link to="/services#app-development"><ChevronRight size={16} /> App Development</Link></li>
                            <li><Link to="/services#e-commerce"><ChevronRight size={16} /> E-Commerce Solutions</Link></li>
                            <li><Link to="/services#digital-marketing"><ChevronRight size={16} /> Digital Marketing</Link></li>
                            <li><Link to="/services#wms"><ChevronRight size={16} /> WMS Solutions</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-col contact-col">
                        <h4 className="footer-heading">Contact Us</h4>
                        <ul className="footer-contact-list">
                            <li>
                                <MapPin size={20} className="contact-icon" />
                                <span>
                                    MIG 47, 1st St, Ramapuram,<br />
                                    TNHB Colony, Velachery,<br />
                                    Chennai, Tamil Nadu 600042
                                </span>
                            </li>
                            <li>
                                <Phone size={20} className="contact-icon" />
                                <a href="tel:+919884488747">+91 98844 88747</a>
                            </li>
                            <li>
                                <Mail size={20} className="contact-icon" />
                                <a href="mailto:kkintl.org@gmail.com">kkintl.org@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} KK International Pvt Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
