import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to handle scroll to ID if on homepage, else navigate home then scroll
    const handleNavClick = (e, id) => {
        if (location.pathname !== '/') {
            // If not home, we rely on the Link to take us home, 
            // but scrolling to ID requires a bit more logic (hash link)
            // For simplicity in this iteration, we just let Link work.
            return;
        }
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="nav-logo">AIoT<span>.Edge</span></Link>

                <ul className="nav-links">
                    <li><Link to="/solutions/ppe" className="nav-link">Giải Pháp PPE</Link></li>
                    <li><Link to="/solutions/retail" className="nav-link">Giải Pháp Retail</Link></li>
                    <li><Link to="/" className="nav-link">Công Nghệ</Link></li>
                    <li><Link to="/" className="nav-link">Blog</Link></li>
                </ul>

                <a href="#contact-info" className="nav-cta">Liên Hệ Ngay</a>
            </div>
        </nav>
    );
};

export default Navbar;
