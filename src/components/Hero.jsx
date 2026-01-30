import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Network, Zap } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            {/* Abstract Background - Cyber Network Effect */}
            <div className="hero-bg">
                <svg xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2979ff" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
                <motion.div
                    className="hero-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                />
            </div>

            <div className="hero-content-wrapper">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="hero-badge">
                        <Zap size={16} />
                        <span>Next-Gen AIoT Solutions</span>
                    </div>

                    <h1 className="hero-title">
                        Edge AI <span className="text-gradient">Revolution</span>
                        <br />
                        <span className="hero-title-sub">
                            Mang Trí Tuệ Nhân Tạo Từ Đám Mây Xuống Thiết Bị Thực
                        </span>
                    </h1>

                    <p className="hero-desc">
                        Xử lý dữ liệu tức thời. Kết nối LoRa tầm xa. Tự động hóa quy trình với n8n.
                        <br />
                        Giải pháp toàn diện cho <strong>Công nghiệp</strong> & <strong>Nông nghiệp 4.0</strong>.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            Khám Phá Giải Pháp
                            <ArrowRight size={20} />
                        </button>
                        <button className="hero-btn-secondary">
                            Liên Hệ Tư Vấn
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Floating Elements for visual depth */}
            <motion.div
                className="floating-icon icon-1"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <Network size={64} />
            </motion.div>
            <motion.div
                className="floating-icon icon-2"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                <Cpu size={64} />
            </motion.div>
        </section>
    );
};

export default Hero;
