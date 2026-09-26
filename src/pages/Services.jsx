import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
    Monitor, Smartphone, ShoppingCart, Megaphone, Package,
    Code, Layout, Globe, Lock, LineChart, Cpu,
    Share2, Search, Mail, Scan, Box, BarChart3, Database
} from 'lucide-react';
import '../styles/services.css';

export default function Services() {
    return (
        <>
            <Helmet>
                <title>Our Services | KK International</title>
                <meta name="description" content="Explore KK International's services including Web Development, App Development, E-Commerce, Digital Marketing, and Warehouse Management Systems." />
            </Helmet>

            <div className="animate-fade-in">
                {/* Header */}
                <section className="service-page-header">
                    <div className="container">
                        <h1 className="h1">Our Services</h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', maxWidth: '600px', margin: '1rem auto 0' }}>
                            We provide comprehensive enterprise solutions designed to accelerate digital transformation.
                        </p>
                    </div>
                </section>

                {/* 1. Web Development */}
                <section id="web-development" className="service-detail-section">
                    <div className="container">
                        <div className="service-grid-2col">
                            <div className="service-intro">
                                <div className="service-intro-icon">
                                    <Monitor size={32} />
                                </div>
                                <h2 className="h2">Website Development</h2>
                                <p className="text-muted" style={{ marginBottom: '1rem' }}>
                                    KK International creates tailored websites aligned with brand identity, business goals, and target audience.
                                </p>
                                <p className="text-muted">
                                    We focus on seamless user experience, custom solutions, business growth, and brand differentiation.
                                </p>
                            </div>

                            <div className="sub-services-grid">
                                <div className="sub-service-card">
                                    <h4><Code size={20} className="text-muted" /> Custom Website Dev</h4>
                                    <p>Fully bespoke websites built from the ground up for specific requirements.</p>
                                </div>
                                <div className="sub-service-card">
                                    <h4><Layout size={20} className="text-muted" /> Business Websites</h4>
                                    <p>Professional corporate sites that establish authority and trust.</p>
                                </div>
                                <div className="sub-service-card">
                                    <h4><Globe size={20} className="text-muted" /> Informational Websites</h4>
                                    <p>Clear, accessible platforms for information dissemination.</p>
                                </div>
                                <div className="sub-service-card">
                                    <h4><ShoppingCart size={20} className="text-muted" /> E-Commerce Websites</h4>
                                    <p>High-conversion storefronts integrated with modern web frameworks.</p>
                                </div>
                                <div className="sub-service-card">
                                    <h4><Cpu size={20} className="text-muted" /> Custom Web Solutions</h4>
                                    <p>Complex web portals, internal tools, and specialized web endpoints.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. E-Commerce Solutions */}
                <section id="e-commerce" className="service-detail-section">
                    <div className="container">
                        <div className="service-grid-2col">
                            <div className="service-intro">
                                <div className="service-intro-icon">
                                    <ShoppingCart size={32} />
                                </div>
                                <h2 className="h2">E-Commerce Solutions</h2>
                                <p className="text-muted">
                                    We build secure e-commerce platforms focused on maximizing conversion rates, robust product management, and reliable payment flows.
                                </p>
                            </div>

                            <div className="sub-services-grid">
                                <div className="sub-service-card">
                                    <h4><Code size={20} className="text-muted" /> E-Commerce Development</h4>
                                    <p>End-to-end building of online stores customized for your audience.</p>
                                </div>
                                <div className="sub-service-card">
                                    <h4><Box size={20} className="text-muted" /> Product Management</h4>
                                    <p>Tools to easily manage catalogs, variants, and pricing.</p>
                                </div>
                                <div className="sub-service-card">
                                    <h4><Lock size={20} className="text-muted" /> Payment Gateway</h4>
                                    <p>Secure integrations covering major payment providers and banks.</p>
                                </div>
                                <div className="sub-service-card">
                                    <h4><Monitor size={20} className="text-muted" /> Shopping Experience</h4>
                                    <p>Optimized UX/UI configurations to increase cart completion.</p>
                                </div>
                                <div className="sub-service-card">
                                    <h4><Package size={20} className="text-muted" /> Vehicle Management System</h4>
                                    <p>Fleet monitoring and management integrated into your commercial flows.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. App Development */}
                <section id="app-development" className="service-detail-section">
                    <div className="container">
                        <div className="service-grid-2col">
                            <div className="service-intro">
                                <div className="service-intro-icon">
                                    <Smartphone size={32} />
                                </div>
                                <h2 className="h2">App Development</h2>
                                <p className="text-muted">
                                    Delivering high-performance native and cross-platform mobile applications with user-friendly interfaces. From Flutter to complete native solutions.
                                </p>
                            </div>

                            <div className="sub-services-grid">
                                <div className="sub-service-card">
                                    <h4>Android & iOS Apps</h4>
                                    <p>High-quality native applications for the Android and Apple ecosystems.</p>
                                </div>
                                <div className="sub-service-card">
                                    <h4>Cross-Platform</h4>
                                    <p>Code once, deploy everywhere using React Native, Flutter, or Xamarin.</p>
                                </div>
                                <div className="sub-service-card">
                                    <h4>Maintenance & Support</h4>
                                    <p>Ongoing dedicated support to ensure maximum uptime.</p>
                                </div>
                                <div className="sub-service-card">
                                    <h4>Performance Monitoring</h4>
                                    <p>Proactive resource and crash tracking for continuous reliability.</p>
                                </div>
                                <div className="sub-service-card">
                                    <h4>Bug Fixes & Features</h4>
                                    <p>Agile integration of enhancements directly into your existing app.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Digital Marketing */}
                <section id="digital-marketing" className="service-detail-section">
                    <div className="container">
                        <div className="service-grid-2col">
                            <div className="service-intro">
                                <div className="service-intro-icon">
                                    <Megaphone size={32} />
                                </div>
                                <h2 className="h2">Digital Marketing</h2>
                                <p className="text-muted">
                                    We help position your brand strategically in the digital landscape, driving measured results and long-term organic presence.
                                </p>
                            </div>

                            <div className="sub-services-grid">
                                <div className="sub-service-card">
                                    <h4><Share2 size={20} className="text-muted" /> Social Media Marketing</h4>
                                    <p>Build brand presence, drive audience engagement, and create meaningful interactions.</p>
                                </div>
                                <div className="sub-service-card">
                                    <h4><LineChart size={20} className="text-muted" /> Google Ads / PPC</h4>
                                    <p>Targeted campaigns, increased traffic, lead generation, and measurable ROI.</p>
                                </div>
                                <div className="sub-service-card">
                                    <h4><Search size={20} className="text-muted" /> Search Engine Optimization</h4>
                                    <p>Enhance search visibility, organic traffic, and competitive positioning.</p>
                                </div>
                                <div className="sub-service-card">
                                    <h4><Mail size={20} className="text-muted" /> Email Marketing</h4>
                                    <p>Lead nurturing, customer retention strategies, and high-conversion mailouts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Warehouse Management System */}
                <section id="wms" className="service-detail-section">
                    <div className="container">
                        <div className="service-grid-2col">
                            <div className="service-intro">
                                <div className="service-intro-icon">
                                    <Package size={32} />
                                </div>
                                <h2 className="h2">Warehouse Management System</h2>
                                <p className="text-muted">
                                    Specialized logistics and inventory platforms designed for E-Commerce, Retail, Manufacturing, Logistics, FMCG, and Pharmaceuticals.
                                </p>
                            </div>

                            <div className="sub-services-grid">
                                <div className="sub-service-card">
                                    <h4><Box size={20} className="text-muted" /> Inventory Tracking</h4>
                                    <p>Real-time analytics and tracking of all stock metrics.</p>
                                </div>
                                <div className="sub-service-card">
                                    <h4><Scan size={20} className="text-muted" /> Barcode & RFID</h4>
                                    <p>Physical hardware integration for seamless scanning and verification.</p>
                                </div>
                                <div className="sub-service-card">
                                    <h4><ShoppingCart size={20} className="text-muted" /> Order Management</h4>
                                    <p>Efficient handling of picking, packing, and shipping workflows.</p>
                                </div>
                                <div className="sub-service-card">
                                    <h4><Globe size={20} className="text-muted" /> Multi-Warehouse</h4>
                                    <p>Manage interconnected systems and transfers securely.</p>
                                </div>
                                <div className="sub-service-card">
                                    <h4><BarChart3 size={20} className="text-muted" /> Reporting & Analytics</h4>
                                    <p>Centralized dashboards with intelligent forecasting tools.</p>
                                </div>
                                <div className="sub-service-card">
                                    <h4><Database size={20} className="text-muted" /> Seamless Integrations</h4>
                                    <p>Deep compatibility with ERPs, accounting software, and E-commerce.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
