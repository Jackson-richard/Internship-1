import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
    Monitor,
    Smartphone,
    Megaphone,
    ShoppingCart,
    Package,
    ArrowRight,
    Target,
    Award,
    Zap,
    CheckCircle2,
    Phone
} from 'lucide-react';
import '../styles/home.css';

export default function Home() {
    const services = [
        {
            title: 'Web Development',
            desc: 'Tailored websites aligned with brand identity, business goals, and target audience.',
            icon: <Monitor size={32} />,
            link: '/services#web-development'
        },
        {
            title: 'App Development',
            desc: 'High-performance native and cross-platform mobile applications with user-friendly interfaces.',
            icon: <Smartphone size={32} />,
            link: '/services#app-development'
        },
        {
            title: 'E-Commerce Solutions',
            desc: 'Secure e-commerce platforms with product management and payment gateway integration.',
            icon: <ShoppingCart size={32} />,
            link: '/services#e-commerce'
        },
        {
            title: 'Digital Marketing',
            desc: 'Targeted campaigns, SEO, and social media marketing to boost your organic growth.',
            icon: <Megaphone size={32} />,
            link: '/services#digital-marketing'
        },
        {
            title: 'Warehouse Management',
            desc: 'Real-time inventory tracking, multi-warehouse management, and ERP integration.',
            icon: <Package size={32} />,
            link: '/services#wms'
        }
    ];

    const testimonials = [
        {
            id: 1,
            quote: "The technology transformation guided by KK International has streamlined our internal processes entirely. Their dedication to business alignment is evident.",
            author: "Sarah Jenkins",
            role: "Operations Director, Summit Logistics"
        },
        {
            id: 2,
            quote: "Their custom E-commerce solution and warehouse management integration provided us with complete visibility across our supply chain.",
            author: "Marcus Chen",
            role: "CEO, RetailEdge Inc."
        },
        {
            id: 3,
            quote: "We have seen measurable ROI from their targeted digital marketing campaigns. A truly professional team that understands growth.",
            author: "Elena Rodriguez",
            role: "Marketing Lead, Global Health."
        }
    ];

    return (
        <>
            <Helmet>
                <title>KK International | Technology Solutions That Move Your Business Forward</title>
                <meta name="description" content="KK International Pvt Ltd is a premium IT consultancy providing technology strategy, digital transformation, web & app development, and warehouse management systems." />
            </Helmet>

            <div className="animate-fade-in">

                <section className="hero-section">
                    <div className="hero-bg-shapes">
                        <div className="shape-1"></div>
                        <div className="shape-2"></div>
                    </div>
                    <div className="container">
                        <div className="hero-content">
                            <span className="hero-subtitle">KK International Pvt Ltd</span>
                            <div className="hero-logo-container" style={{ margin: '2rem 0' }}>
                                <img src="/assets/kk-international-logo.png" alt="KK International Logo" className="hero-animated-logo" style={{ height: '80px', width: 'auto', animation: 'subtleFloat 4s ease-in-out infinite' }} />
                                <style>{`
                                    @keyframes subtleFloat {
                                        0% { transform: translateY(0) scale(1); opacity: 0.9; }
                                        50% { transform: translateY(-8px) scale(1.02); opacity: 1; filter: drop-shadow(0 4px 8px rgba(255,255,255,0.2)); }
                                        100% { transform: translateY(0) scale(1); opacity: 0.9; }
                                    }
                                    @media (prefers-reduced-motion: reduce) {
                                        .hero-animated-logo { animation: none !important; }
                                    }
                                `}</style>
                            </div>
                            <h1 className="hero-heading" style={{ marginBottom: '1.5rem', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(2.25rem, 4vw, 3.75rem)', maxWidth: '100%', wordBreak: 'break-word' }}>
                                Technology Solutions<br />That Move Your Business<br />Forward
                            </h1>
                            <p className="hero-desc">
                                We operate at the intersection of global business and digital innovation, providing expert guidance in technology strategy, digital transformation, software solutions, and IT infrastructure.
                            </p>
                            <div className="hero-actions">
                                <Link to="/contact" className="btn btn-primary">
                                    Get a Quote <ArrowRight size={20} />
                                </Link>
                                <Link to="/warehouse-locations" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>
                                    Warehouse Locations
                                </Link>
                                <Link to="/services" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white' }}>
                                    Explore Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section section-bg-light" id="services">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-badge">What We Do</span>
                            <h2 className="h2">Comprehensive Digital Solutions</h2>
                            <p className="text-muted">We build a digital landscape where businesses can harness technology to thrive, innovate, and create lasting impact.</p>
                        </div>

                        <div className="services-grid">
                            {services.map((service, index) => (
                                <div className="service-card" key={index}>
                                    <div className="service-icon-wrapper">
                                        {service.icon}
                                    </div>
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-desc">{service.desc}</p>
                                    <Link to={service.link} className="service-link">
                                        Learn More <ArrowRight size={16} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                <section className="stats-section">
                    <div className="container">
                        <div className="stats-grid">
                            <div className="stat-item">
                                <div className="stat-value">100%</div>
                                <div className="stat-label">Client Commitment</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value">24/7</div>
                                <div className="stat-label">Support</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value">150+</div>
                                <div className="stat-label">Projects Delivered</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value">60+</div>
                                <div className="stat-label">Happy Clients</div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section section-bg-light">
                    <div className="container">
                        <div className="value-grid">
                            <div className="value-content">
                                <span className="section-badge">Why Choose Us</span>
                                <h2 className="h2">Excellence and Continuous Innovation</h2>
                                <p className="text-muted">
                                    We are dedicated to client success through strategic digital innovation.
                                    Our team ensures that your technology strategy directly supports your business growth.
                                </p>
                                <div className="value-list">
                                    <div className="value-item">
                                        <CheckCircle2 className="value-icon" size={28} />
                                        <div className="value-text">
                                            <h4>Technology Strategy</h4>
                                            <p>Aligning digital capabilities with your long-term business objectives.</p>
                                        </div>
                                    </div>
                                    <div className="value-item">
                                        <Target className="value-icon" size={28} />
                                        <div className="value-text">
                                            <h4>Client Success Focus</h4>
                                            <p>We measure our success entirely by the positive impact on your operations.</p>
                                        </div>
                                    </div>
                                    <div className="value-item">
                                        <Zap className="value-icon" size={28} />
                                        <div className="value-text">
                                            <h4>Continuous Innovation</h4>
                                            <p>Always adapting modern technologies to give you a competitive edge.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="value-image" style={{ minHeight: '400px', height: '100%', borderRadius: '1rem', overflow: 'hidden' }}>
                                <img src="/assets/images/professional_business_environment.png" alt="Professional Business Environment" style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '400px' }} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section section-bg-light" style={{ backgroundColor: '#f1f5f9' }}>
                    <div className="container">
                        <div className="section-header">
                            <span className="section-badge">Client Stories</span>
                            <h2 className="h2">Trusted by Businesses</h2>
                            <p className="text-muted">See what our partners have to say about our technology solutions.</p>
                        </div>

                        <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                            {testimonials.map((item) => (
                                <div className="service-card" key={item.id} style={{ textAlign: 'center', padding: '2rem' }}>
                                    <div style={{ color: '#cbd5e1', marginBottom: '1rem' }}>
                                        <Award size={48} style={{ margin: '0 auto' }} />
                                    </div>
                                    <p style={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>
                                        "{item.quote}"
                                    </p>
                                    <div>
                                        <h4 style={{ fontWeight: '700' }}>{item.author}</h4>
                                        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.role}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                <section className="cta-section" style={{ padding: '4rem 0' }}>
                    <div className="container">
                        <div className="cta-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', maxWidth: '100%' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                                <h2 className="h2" style={{ color: 'white', margin: 0, fontSize: '1.5rem' }}>Contact</h2>
                                <a href="tel:+919884488747" style={{ color: 'white', fontSize: '1.5rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', whiteSpace: 'nowrap' }}>
                                    <Phone size={24} /> +91 98844 88747
                                </a>
                            </div>
                            <div className="cta-actions" style={{ margin: 0 }}>
                                <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: 'white', color: 'var(--primary)', padding: '0.75rem 2rem', fontSize: '1.1rem', minWidth: 'auto', borderRadius: 'var(--radius-md)' }}>
                                    Get a Quote
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}
