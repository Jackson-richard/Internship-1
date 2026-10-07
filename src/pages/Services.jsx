import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
    Monitor, Smartphone, ShoppingCart, Megaphone, Package,
    Code, Layout, Globe, Lock, LineChart, Cpu,
    Share2, Search, Mail, Scan, Box, BarChart3, Database, TrendingUp
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

                <section id="data-analytics" className="service-detail-section">
                    <div className="container">
                        <div className="service-grid-2col">
                            <div className="service-intro">
                                <div className="service-intro-icon">
                                    <BarChart3 size={32} />
                                </div>
                                <h2 className="h2" style={{ marginBottom: '1rem' }}>DATA ANALYTICS</h2>
                                <h3 className="h3" style={{ marginBottom: '1rem', color: 'var(--text-color)' }}>Data Analytics Services</h3>
                                <p className="text-muted" style={{ marginBottom: '2rem' }}>
                                    "Transform your data into actionable business insights with our comprehensive Data Analytics solutions. We help organizations collect, clean, analyse, and visualize data through interactive dashboards and reports, enabling smarter decision-making, improved operational efficiency, and sustainable business growth."
                                </p>
                                <img src="/assets/images/data_analytics_dashboard.png" alt="Data Analytics" style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)', objectFit: 'cover' }} />
                            </div>

                            <div className="sub-services-grid">
                                <div className="sub-service-card">
                                    <div className="card-icon-container"><Database size={24} className="text-primary" /></div>
                                    <h4>Data Analytics for Political Campaigns in India</h4>
                                    <p>Political Data Analytics is a process of predicting the sample data taken from a survey to the most accurate output of the voters including their issues. We use these sample data and predict to form different strategies for your Political Parties/Candidates in your region like Voter Profiling, Issue analysis, and other strategies that increase your chances of winning the election.</p>
                                </div>
                                <div className="sub-service-card">
                                    <div className="card-icon-container"><Box size={24} className="text-primary" /></div>
                                    <h4>Inventory Analytics</h4>
                                    <p>Optimize your inventory with data-driven insights. We analyse stock levels, demand patterns, and inventory performance to reduce costs, prevent stock shortages, minimize overstocking, and improve supply chain efficiency.</p>
                                </div>
                                <div className="sub-service-card">
                                    <div className="card-icon-container"><LineChart size={24} className="text-primary" /></div>
                                    <h4>LIC Agent CRM Dashboard</h4>
                                    <p>Streamline your insurance business with a centralized CRM dashboard designed for LIC agents. Efficiently manage customer details, policy renewals, leads, follow-ups, and performance insights to enhance productivity and deliver better client service.</p>
                                </div>
                                <div className="sub-service-card">
                                    <div className="card-icon-container"><TrendingUp size={24} className="text-primary" /></div>
                                    <h4>Product Trending Analysis</h4>
                                    <p>Stay ahead of market demand with intelligent product trend analysis. Our analytics solutions identify high-demand products, track changing customer preferences, monitor sales trends, and uncover emerging market opportunities. By analyzing real-time sales data and consumer behavior, we help businesses optimize inventory, improve product planning, and make data-driven decisions that increase sales and maximize profitability.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="erp-sap" className="service-detail-section" style={{ backgroundColor: 'var(--bg-card)' }}>
                    <div className="container">
                        <style>{`
                            .erp-main-grid {
                                display: grid;
                                grid-template-columns: 1.2fr 1fr;
                                gap: clamp(2rem, 5vw, 4rem);
                                align-items: center;
                                margin-bottom: 3rem;
                            }
                            @media (max-width: 991px) {
                                .erp-main-grid {
                                    grid-template-columns: 1fr;
                                }
                            }
                        `}</style>
                        <div className="erp-main-grid">
                            <div className="service-intro" style={{ position: 'static', marginBottom: 0 }}>
                                <div className="service-intro-icon">
                                    <Database size={32} />
                                </div>
                                <h2 className="h2" style={{ marginBottom: '1rem' }}>ERP / SAP Business Model</h2>
                                <p className="text-muted" style={{ marginBottom: '2rem' }}>
                                    Comprehensive enterprise resource planning solutions tailored to streamline operations, enhance cross-departmental data flow, and optimize core business processes.
                                </p>
                            </div>
                            <div>
                                <img src="/assets/images/erp_sap_system.png" alt="ERP SAP Business Model" style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)', objectFit: 'cover' }} />
                            </div>
                        </div>

                        <div className="sub-services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                            <div className="sub-service-card">
                                <div className="card-icon-container"><Cpu size={24} className="text-primary" /></div>
                                <h4>Enterprise Scalability</h4>
                                <p>Robust systems designed to scale with your organizational growth.</p>
                            </div>
                            <div className="sub-service-card">
                                <div className="card-icon-container"><Share2 size={24} className="text-primary" /></div>
                                <h4>Process Optimization</h4>
                                <p>End-to-end integration of departmental workflows and data silos.</p>
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
