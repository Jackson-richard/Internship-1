import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Quote } from 'lucide-react';

export default function Testimonials() {
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
        },
        {
            id: 4,
            quote: "KK International developed our cross-platform mobile application flawlessly. Their ongoing support network is exceptional.",
            author: "David Peterson",
            role: "Product Manager, FinTech Solutions"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Testimonials | KK International</title>
                <meta name="description" content="See what our clients say about KK International's IT consultancy and digital solutions." />
            </Helmet>

            <div className="animate-fade-in">
                <section className="service-page-header">
                    <div className="container">
                        <h1 className="h1">Client Testimonials</h1>
                        <p className="text-light" style={{ maxWidth: '700px', margin: '1rem auto 0', fontSize: '1.2rem', color: 'var(--text-light)' }}>
                            We align our technological strategies seamlessly with overarching business goals, ensuring every client's success.
                        </p>
                    </div>
                </section>

                <section className="section section-bg-light">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-badge">Feedback</span>
                            <h2 className="h2">What Our Partners Say</h2>
                            <p className="text-muted">
                                Trust is built on reliable delivery and technological excellence.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                            {testimonials.map(t => (
                                <div key={t.id} style={{ backgroundColor: 'white', padding: '2.5rem', borderRadius: '1rem', boxShadow: 'var(--shadow-sm)', border: '1px solid rgba(0,0,0,0.05)', position: 'relative' }}>
                                    <Quote size={48} style={{ color: 'rgba(37, 99, 235, 0.1)', position: 'absolute', top: '20px', right: '20px' }} />
                                    <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '2rem', color: 'var(--text-main)', position: 'relative', zIndex: 2 }}>
                                        "{t.quote}"
                                    </p>
                                    <div>
                                        <h4 style={{ fontWeight: '700', fontSize: '1.1rem' }}>{t.author}</h4>
                                        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{t.role}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ textAlign: 'center', marginTop: '4rem', padding: '3rem', backgroundColor: 'var(--bg-dark)', borderRadius: '1rem', color: 'white' }}>
                            <h3 className="h3" style={{ marginBottom: '1rem' }}>Join our partner network</h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                                Are you ready to see how our targeted technology strategy and tailored solutions can impact your business?
                            </p>
                            <a href="/contact" className="btn btn-primary" style={{ backgroundColor: 'white', color: 'var(--primary)' }}>
                                Get in touch today
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
