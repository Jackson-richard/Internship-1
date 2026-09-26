import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Portfolio() {
    const projects = [
        {
            id: 1,
            title: 'Enterprise E-Commerce Platform',
            industry: 'Retail & FMCG',
            services: 'Web Development, E-Commerce, UX/UI',
            desc: 'Scalable multi-vendor platform with tailored inventory tracking and seamless payment gateway integrations.',
            image: '/assets/images/ecommerce_platform.png'
        },
        {
            id: 2,
            title: 'Fleet & Warehouse Management System',
            industry: 'Logistics',
            services: 'WMS, API Integration, Dashboard',
            desc: 'Centralized dashboard tracking multi-warehouse inventory levels with RFID integration and automated order routing.',
            image: '/assets/images/warehouse_system.png'
        },
        {
            id: 3,
            title: 'Healthcare Booking Application',
            industry: 'Healthcare',
            services: 'App Development (React Native), API',
            desc: 'High-performance cross-platform mobile application supporting real-time appointments and tele-health interactions.',
            image: '/assets/images/healthcare_app.png'
        },
        {
            id: 4,
            title: 'Financial Services Portal',
            industry: 'FinTech',
            services: 'Custom Web Solutions, Security',
            desc: 'Secure customer-facing portal featuring encrypted data layers, custom reporting formats, and high availability.',
            image: '/assets/images/fintech_portal.png'
        }
    ];

    return (
        <>
            <Helmet>
                <title>Portfolio & Projects | KK International</title>
                <meta name="description" content="View our successful projects and case studies showcasing our technology solutions for enterprises globally." />
            </Helmet>

            <div className="animate-fade-in">
                <section className="service-page-header">
                    <div className="container">
                        <h1 className="h1">Our Portfolio</h1>
                        <p className="text-light" style={{ maxWidth: '700px', margin: '1rem auto 0', fontSize: '1.2rem', color: 'var(--text-light)' }}>
                            A selection of our high-impact technology deliveries.
                        </p>
                    </div>
                </section>

                <section className="section section-bg-light">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-badge">Case Studies</span>
                            <h2 className="h2">Proven Results & Implementations</h2>
                            <p className="text-muted">
                                Explore how we have successfully partnered with our clients to architect, build, and deploy
                                robust technology solutions across multiple industries.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                            {projects.map(project => (
                                <div key={project.id} style={{ backgroundColor: 'white', borderRadius: '1rem', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', border: '1px solid rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ height: '240px', overflow: 'hidden' }}>
                                        <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                            <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--secondary)', backgroundColor: 'rgba(37, 99, 235, 0.1)', padding: '0.25rem 0.75rem', borderRadius: '1rem', textTransform: 'uppercase' }}>
                                                {project.industry}
                                            </span>
                                        </div>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem' }}>{project.title}</h3>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}><strong>Services:</strong> {project.services}</p>
                                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flexGrow: 1 }}>{project.desc}</p>

                                        <button className="btn btn-outline" style={{ width: '100%', padding: '0.5rem', fontSize: '0.9rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                                            Read Case Study <ExternalLink size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                            <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
                                Have a similar project in mind? We'd love to help you build it.
                            </p>
                            <Link to="/contact" className="btn btn-primary">
                                Discuss Your Project <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
