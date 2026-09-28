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

                <section className="service-page-header">
                    <div className="container">
                        <h1 className="h1">Our Services</h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', maxWidth: '600px', margin: '1rem auto 0' }}>
                            We provide comprehensive enterprise solutions designed to accelerate digital transformation.
                        </p>
                    </div>
                </section>

                <section id="web-development" className="service-detail-section">
                    <div className="container">
                        <div className="service-grid-2col">
                            <div className="service-intro">
                                <div className="service-intro-icon">
                                    <Monitor size={32} />
                                </div>
                                <h2 className="h2" style={{ marginBottom: '1rem' }}>Website Development</h2>
                                <p className="text-muted" style={{ marginBottom: '1rem' }}>
                                    KK International creates tailored websites aligned with brand identity, business goals, and target audience.
                                </p>
                                <p className="text-muted" style={{ marginBottom: '2rem' }}>
                                    We focus on seamless user experience, custom solutions, business growth, and brand differentiation.
                                </p>
                                <img src="/assets/images/professional_business_environment.png" alt="Web Development" style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)', objectFit: 'cover' }} />
                            </div>

                            <div className="sub-services-grid">
                                <div className="sub-service-card">
                                    <div className="card-icon-container"><Code size={24} className="text-primary" /></div>
                                    <h4>Custom Website Dev</h4>
                                    <p>Fully bespoke websites built from the ground up for specific requirements.</p>
                                </div>
                                <div className="sub-service-card">
                                    <div className="card-icon-container"><Layout size={24} className="text-primary" /></div>
                                    <h4>Business Websites</h4>
                                    <p>Professional corporate sites that establish authority and trust.</p>
                                </div>
                                <div className="sub-service-card">
                                    <div className="card-icon-container"><Globe size={24} className="text-primary" /></div>
                                    <h4>Informational Websites</h4>
                                    <p>Clear, accessible platforms for information dissemination.</p>
                                </div>
                                <div className="sub-service-card">
                                    <div className="card-icon-container"><ShoppingCart size={24} className="text-primary" /></div>
                                    <h4>E-Commerce Websites</h4>
                                    <p>High-conversion storefronts integrated with modern web frameworks.</p>
                                </div>
                                <div className="sub-service-card">
                                    <div className="card-icon-container"><Cpu size={24} className="text-primary" /></div>
                                    <h4>Custom Web Solutions</h4>
                                    <p>Complex web portals, internal tools, and specialized web endpoints.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="e-commerce" className="service-detail-section">
                    <div className="container">
                        <div className="service-grid-2col">
                            <div className="service-intro">
                                <div className="service-intro-icon">
                                    <ShoppingCart size={32} />
                                </div>
                                <h2 className="h2" style={{ marginBottom: '1rem' }}>E-Commerce Solutions</h2>
                                <p className="text-muted" style={{ marginBottom: '2rem' }}>
                                    We build secure e-commerce platforms focused on maximizing conversion rates, robust product management, and reliable payment flows.
                                </p>
                                <img src="/assets/images/ecommerce_platform.png" alt="E-Commerce Solutions" style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)', objectFit: 'cover' }} />
                            </div>

                            <div className="sub-services-grid">
                                <div className="sub-service-card">
                                    <div className="card-icon-container"><Code size={24} className="text-primary" /></div>
                                    <h4>E-Commerce Development</h4>
                                    <p>End-to-end building of online stores customized for your audience.</p>
                                </div>
                                <div className="sub-service-card">
                                    <div className="card-icon-container"><Box size={24} className="text-primary" /></div>
                                    <h4>Product Management</h4>
                                    <p>Tools to easily manage catalogs, variants, and pricing.</p>
                                </div>
                                <div className="sub-service-card">
                                    <div className="card-icon-container"><Lock size={24} className="text-primary" /></div>
                                    <h4>Payment Gateway</h4>
                                    <p>Secure integrations covering major payment providers and banks.</p>
                                </div>
                                <div className="sub-service-card">
                                    <div className="card-icon-container"><Monitor size={24} className="text-primary" /></div>
                                    <h4>Shopping Experience</h4>
                                    <p>Optimized UX/UI configurations to increase cart completion.</p>
                                </div>
                                <div className="sub-service-card">
                                    <div className="card-icon-container"><Package size={24} className="text-primary" /></div>
                                    <h4>Vehicle Management System</h4>
                                    <p>Fleet monitoring and management integrated into your commercial flows.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="app-development" className="service-detail-section">
                    <div className="container">
                        <div className="service-grid-2col">
                            <div className="service-intro">
                                <div className="service-intro-icon">
                                    <Smartphone size={32} />
                                </div>
                                <h2 className="h2" style={{ marginBottom: '1rem' }}>App Development</h2>
                                <p className="text-muted" style={{ marginBottom: '2rem' }}>
                                    Delivering high-performance native and cross-platform mobile applications with user-friendly interfaces. From Flutter to complete native solutions.
                                </p>
                                <img src="/assets/images/healthcare_app.png" alt="App Development" style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)', objectFit: 'cover' }} />
                            </div>

                            <div className="sub-services-grid">
                                <div className="sub-service-card">
                                    <div className="card-icon-container"><Smartphone size={24} className="text-primary" /></div>
                                    <h4>Android & iOS Apps</h4>
                                    <p>High-quality native applications for the Android and Apple ecosystems.</p>
                                </div>
                                <div className="sub-service-card">
                                    <div className="card-icon-container"><Layout size={24} className="text-primary" /></div>
                                    <h4>Cross-Platform</h4>
                                    <p>Code once, deploy everywhere using React Native, Flutter, or Xamarin.</p>
                                </div>
                                <div className="sub-service-card">
                                    <div className="card-icon-container"><Monitor size={24} className="text-primary" /></div>
                                    <h4>Maintenance & Support</h4>
                                    <p>Ongoing dedicated support to ensure maximum uptime.</p>
                                </div>
                                <div className="sub-service-card">
                                    <div className="card-icon-container"><LineChart size={24} className="text-primary" /></div>
                                    <h4>Performance Monitoring</h4>
                                    <p>Proactive resource and crash tracking for continuous reliability.</p>
                                </div>
                                <div className="sub-service-card">
                                    <div className="card-icon-container"><Code size={24} className="text-primary" /></div>
                                    <h4>Bug Fixes & Features</h4>
                                    <p>Agile integration of enhancements directly into your existing app.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="digital-marketing" className="service-detail-section">
                    <div className="container">
                        <div className="service-grid-2col">
                            <div className="service-intro">
                                <div className="service-intro-icon">
                                    <Megaphone size={32} />
                                </div>
                                <h2 className="h2" style={{ marginBottom: '1rem' }}>Digital Marketing</h2>
                                <p className="text-muted" style={{ marginBottom: '2rem' }}>
                                    We help position your brand strategically in the digital landscape, driving measured results and long-term organic presence.
                                </p>
                                <img src="/assets/images/corporate_innovation.png" alt="Digital Marketing" style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)', objectFit: 'cover' }} />
                            </div>

                            <div className="sub-services-grid">
                                <div className="sub-service-card">
                                    <div className="card-icon-container"><Share2 size={24} className="text-primary" /></div>
                                    <h4>Social Media Marketing</h4>
                                    <p>Build brand presence, drive audience engagement, and create meaningful interactions.</p>
                                </div>
                                <div className="sub-service-card">
                                    <div className="card-icon-container"><LineChart size={24} className="text-primary" /></div>
                                    <h4>Google Ads / PPC</h4>
                                    <p>Targeted campaigns, increased traffic, lead generation, and measurable ROI.</p>
                                </div>
                                <div className="sub-service-card">
                                    <div className="card-icon-container"><Search size={24} className="text-primary" /></div>
                                    <h4>Search Engine Optimization</h4>
                                    <p>Enhance search visibility, organic traffic, and competitive positioning.</p>
                                </div>
                                <div className="sub-service-card">
                                    <div className="card-icon-container"><Mail size={24} className="text-primary" /></div>
                                    <h4>Email Marketing</h4>
                                    <p>Lead nurturing, customer retention strategies, and high-conversion mailouts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="wms" className="service-detail-section">
                    <div className="container">
                        <div className="service-grid-2col">
                            <div className="service-intro">
                                <div className="service-intro-icon">
                                    <Package size={32} />
                                </div>
                                <h2 className="h2" style={{ marginBottom: '1rem' }}>Warehouse Management System</h2>
                                <p className="text-muted" style={{ marginBottom: '2rem' }}>
                                    Specialized logistics and inventory platforms designed for E-Commerce, Retail, Manufacturing, Logistics, FMCG, and Pharmaceuticals.
                                </p>
                                <img src="/assets/images/warehouse_system.png" alt="Warehouse Management System" style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)', objectFit: 'cover' }} />
                            </div>

                            <div className="sub-services-grid">
                                <div className="sub-service-card">
                                    <div className="card-icon-container"><Box size={24} className="text-primary" /></div>
                                    <h4>Inventory Tracking</h4>
                                    <p>Real-time analytics and tracking of all stock metrics.</p>
                                </div>
                                <div className="sub-service-card">
                                    <div className="card-icon-container"><Scan size={24} className="text-primary" /></div>
                                    <h4>Barcode & RFID</h4>
                                    <p>Physical hardware integration for seamless scanning and verification.</p>
                                </div>
                                <div className="sub-service-card">
                                    <div className="card-icon-container"><ShoppingCart size={24} className="text-primary" /></div>
                                    <h4>Order Management</h4>
                                    <p>Efficient handling of picking, packing, and shipping workflows.</p>
                                </div>
                                <div className="sub-service-card">
                                    <div className="card-icon-container"><Globe size={24} className="text-primary" /></div>
                                    <h4>Multi-Warehouse</h4>
                                    <p>Manage interconnected systems and transfers securely.</p>
                                </div>
                                <div className="sub-service-card">
                                    <div className="card-icon-container"><BarChart3 size={24} className="text-primary" /></div>
                                    <h4>Reporting & Analytics</h4>
                                    <p>Centralized dashboards with intelligent forecasting tools.</p>
                                </div>
                                <div className="sub-service-card">
                                    <div className="card-icon-container"><Database size={24} className="text-primary" /></div>
                                    <h4>Seamless Integrations</h4>
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
