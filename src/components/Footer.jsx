import React from 'react';
import { MapPin, Phone, Mail, Facebook, Linkedin, Github } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact-info">
            <div className="container">
                <div className="footer-grid">
                    {/* Column 1: Brand */}
                    <div className="footer-col footer-brand">
                        <h3>AIoT<span>.Edge</span></h3>
                        <p className="footer-desc">
                            Tiên phong trong các giải pháp AI tại biên và hệ thống IoT tầm xa cho Công nghiệp & Nông nghiệp 4.0.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <a href="#" className="hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="hover:text-gray-100 transition-colors"><Github size={20} /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Liên Kết Nhanh</h4>
                        <ul className="footer-links">
                            <li><a href="#">Trang Chủ</a></li>
                            <li><a href="#">Giải Pháp</a></li>
                            <li><a href="#">Công Nghệ</a></li>
                            <li><a href="#">Câu Chuyện Khách Hàng</a></li>
                            <li><a href="#">Blog Kỹ Thuật</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Thông Tin Liên Hệ</h4>
                        <div className="contact-info">
                            <div className="contact-item">
                                <MapPin size={20} className="contact-icon" />
                                <span>Tp. Thủ Đức, TP. Hồ Chí Minh</span>
                            </div>
                            <div className="contact-item">
                                <Phone size={20} className="contact-icon" />
                                <div>
                                    <a href="tel:0898336308" className="hover:text-white block">0898 336 308</a>
                                    <a href="tel:0395458706" className="hover:text-white block">0395 458 706</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <Mail size={20} className="contact-icon" />
                                <a href="mailto:forwork.tivasolutions@gmail.com" className="hover:text-white">
                                    forwork.tivasolutions@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Tiva Solutions. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
