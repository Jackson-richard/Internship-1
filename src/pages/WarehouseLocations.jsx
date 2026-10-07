import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin } from 'lucide-react';
import '../styles/home.css';

export default function WarehouseLocations() {
    return (
        <>
            <Helmet>
                <title>Warehouse Locations | KK International</title>
                <meta name="description" content="KK International warehouse location and operations hub." />
            </Helmet>

            <div className="animate-fade-in" style={{ paddingTop: '100px', minHeight: '70vh' }}>
                <section className="section section-bg-light">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-badge">Our Operations Hub</span>
                            <h1 className="h2">Warehouse Locations</h1>
                            <p className="text-muted">Integrated logistics and operations facilities.</p>
                        </div>

                        <div className="services-grid">
                            <a href="https://www.google.com/maps/search/?api=1&query=MIG%2047%2C%201st%20Street%2C%20TNHB%20Colony%2C%20Velachery%2C%20Chennai%2C%20Tamil%20Nadu%20600042" target="_blank" rel="noopener noreferrer" className="service-card" style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center', display: 'block', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                                <div className="service-icon-wrapper" style={{ margin: '0 auto 1.5rem', display: 'inline-flex', justifyContent: 'center' }}>
                                    <MapPin size={32} />
                                </div>
                                <h3 className="service-title">Primary Operations Center</h3>
                                <p className="service-desc" style={{ marginTop: '1rem' }}>
                                    MIG 47, 1st Street<br />
                                    TNHB Colony, Velachery,<br />
                                    Chennai, Tamil Nadu 600042
                                </p>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
