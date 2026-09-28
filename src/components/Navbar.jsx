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
                <Link to="/" className="navbar-logo" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/assets/kk-logo.png" alt="KK International Logo" style={{ height: 'auto', maxHeight: '44px', width: 'auto', objectFit: 'contain' }} />
                </Link>

                {/* Desktop Menu */}
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

                <div className="navbar-actions desktop-only">
                    <a href="tel:+919884488747" className="nav-phone">
                        <Phone size={18} />
                        <span>+91 98844 88747</span>
                    </a>
                    <Link to="/contact" className="btn btn-primary btn-sm">Get a Quote</Link>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-menu-btn mobile-only" onClick={toggleMenu} aria-label="Toggle Menu">
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

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
