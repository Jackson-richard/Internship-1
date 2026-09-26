import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Lightbulb, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <>
            <Helmet>
                <title>About Us | KK International</title>
                <meta name="description" content="Learn about KK International's mission to build a digital landscape where businesses can harness technology to thrive and innovate." />
            </Helmet>

            <div className="animate-fade-in">
                <section className="service-page-header">
                    <div className="container">
                        <h1 className="h1">About KK International</h1>
                        <p className="text-light" style={{ maxWidth: '700px', margin: '1rem auto 0', fontSize: '1.2rem', color: 'var(--text-light)' }}>
                            Operating at the intersection of global business and digital innovation.
                        </p>
                    </div>
                </section>

                <section className="section section-bg-light">
                    <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <span className="section-badge">Our Story</span>
                            <h2 className="h2">Building The Digital Landscape of Tomorrow</h2>
                            <p className="text-muted" style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                                KK International Pvt Ltd is a dynamic IT consultancy company dedicated to empowering modern enterprises.
                                Our core mission is straightforward: we guide businesses through the complexities of technology strategy
                                and digital transformation.
                            </p>
                            <p className="text-muted" style={{ marginBottom: '2rem' }}>
                                Whether you need robust software solutions, scalable IT infrastructure, or strategic consulting,
                                our dedication to excellence ensures that you maintain a competitive edge. We aspire to build a
                                digital landscape where businesses can harness technology to thrive, innovate, and create lasting
                                positive impact.
                            </p>

                            <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                                <div style={{ borderLeft: '4px solid var(--secondary)', paddingLeft: '1rem' }}>
                                    <h4 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)' }}>Continuous</h4>
                                    <p className="text-muted">Innovation</p>
                                </div>
                                <div style={{ borderLeft: '4px solid var(--secondary)', paddingLeft: '1rem' }}>
                                    <h4 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)' }}>Unwavering</h4>
                                    <p className="text-muted">Excellence</p>
                                </div>
                                <div style={{ borderLeft: '4px solid var(--secondary)', paddingLeft: '1rem' }}>
                                    <h4 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)' }}>Dedicated</h4>
                                    <p className="text-muted">Client Success</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ borderRadius: '1rem', height: '100%', minHeight: '400px', overflow: 'hidden' }}>
                            <img src="/assets/images/corporate_innovation.png" alt="Corporate Innovation Environment" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </section>

                <section className="section" style={{ backgroundColor: 'white' }}>
                    <div className="container">
                        <div className="section-header">
                            <h2 className="h2">Core Values</h2>
                            <p className="text-muted">The principles driving our every engagement and solution architecture.</p>
                        </div>

                        <div className="services-grid">
                            <div className="service-card" style={{ textAlign: 'center', alignItems: 'center' }}>
                                <div className="service-icon-wrapper">
                                    <Target size={32} />
                                </div>
                                <h3 className="h3">Excellence</h3>
                                <p className="text-muted">
                                    We refuse to settle for 'good enough'. Our pursuit of high-performance delivery means your systems are built robustly from the ground up.
                                </p>
                            </div>

                            <div className="service-card" style={{ textAlign: 'center', alignItems: 'center' }}>
                                <div className="service-icon-wrapper">
                                    <Lightbulb size={32} />
                                </div>
                                <h3 className="h3">Continuous Innovation</h3>
                                <p className="text-muted">
                                    Technology never idles, and neither do we. We rapidly adopt and deploy the most effective modern methodologies and tools.
                                </p>
                            </div>

                            <div className="service-card" style={{ textAlign: 'center', alignItems: 'center' }}>
                                <div className="service-icon-wrapper">
                                    <Users size={32} />
                                </div>
                                <h3 className="h3">Client Success</h3>
                                <p className="text-muted">
                                    Your growth is our only metric of success. We align our technological strategies seamlessly with your overarching business goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta-section" style={{ padding: '4rem 0' }}>
                    <div className="container">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                            <div>
                                <h3 className="h3" style={{ color: 'white', marginBottom: '0.5rem' }}>Ready to accelerate your digital transformation?</h3>
                                <p style={{ color: 'rgba(255,255,255,0.8)' }}>Connect with our specialists to discuss your IT framework.</p>
                            </div>
                            <Link to="/contact" className="btn btn-outline" style={{ borderColor: 'white', color: 'white', backgroundColor: 'transparent' }}>
                                Schedule a Consultation <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
