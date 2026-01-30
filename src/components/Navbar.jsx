import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

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

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="nav-logo">AIoT<span>.Edge</span></a>

                <ul className="nav-links">
                    <li><a href="#" className="nav-link">Giải Pháp</a></li>
                    <li><a href="#" className="nav-link">Công Nghệ</a></li>
                    <li><a href="#" className="nav-link">Khách Hàng</a></li>
                    <li><a href="#" className="nav-link">Blog</a></li>
                </ul>

                <a href="#" className="nav-cta">Liên Hệ Ngay</a>
            </div>
        </nav>
    );
};

export default Navbar;
