import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => setIsMobileMenuOpen(false);

    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 991);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 991);
            if (window.innerWidth > 991) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginRight: '1rem' }}>
                    <img src="/assets/kk-international-logo.png" alt="KK International Logo" style={{ height: 'auto', maxHeight: '44px', width: 'auto', objectFit: 'contain' }} />
                    <span style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', fontWeight: '800', color: 'var(--text-color)', lineHeight: 1.1, whiteSpace: 'nowrap', display: 'flex', flexDirection: 'column' }}>
                        <span>KK INTERNATIONAL</span>
                        <span style={{ fontSize: '0.75em', fontWeight: '600' }}>PVT LTD</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                {isDesktop && (
                    <nav className="navbar-links desktop-only">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                )}

                {isDesktop && (
                    <div className="navbar-actions desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <a href="tel:+919884488747" className="nav-phone" style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Phone size={18} />
                            <span>+91 98844 88747</span>
                        </a>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '0.4rem 1.25rem', fontSize: '0.9rem', minWidth: 'auto' }}>Get a Quote</Link>
                    </div>
                )}

                {/* Mobile Toggle */}
                {!isDesktop && (
                    <button className="mobile-menu-btn mobile-only" onClick={toggleMenu} aria-label="Toggle Menu">
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                )}

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="mobile-menu">
                        <nav className="mobile-nav-links">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                    onClick={closeMenu}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="mobile-nav-actions">
                                <a href="tel:+919884488747" className="btn btn-outline" onClick={closeMenu}>Call Us</a>
                                <Link to="/contact" className="btn btn-primary" onClick={closeMenu}>Get a Quote</Link>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
