import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldAlert, BadgeCheck, HardHat, Eye } from 'lucide-react';
import './SolutionPage.css';

// Import assets
import ppeVid1 from '../assets/ppe.mp4';
import ppeImg1 from '../assets/ppe.jpg';
import ppeImg2 from '../assets/ppe1.jpg';

const SolutionPPE = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="solution-page">
            <section className="sol-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(${ppeImg1})` }}>
                <div className="container">
                    <span className="sol-badge">Smart Construction</span>
                    <h1 className="sol-title">Giám Sát Bảo Hộ Lao Động (PPE)</h1>
                    <p className="sol-subtitle">Đảm bảo an toàn tuyệt đối 24/7 với hệ thống AI Vision tự động nhận diện Mũ/Áo bảo hộ.</p>
                </div>
            </section>

            <section className="sol-content section-padding">
                <div className="container">
                    {/* Feature Block 1: The Problem */}
                    <div className="sol-grid">
                        <div className="sol-text-block">
                            <h2>Vấn Đề: Rủi Ro Tai Nạn & Tuân Thủ</h2>
                            <p>
                                Tại các công trường xây dựng và nhà máy sản xuất, việc nhân sự "quên" hoặc cố tình không đeo đồ bảo hộ (PPE) là nguyên nhân hàng đầu gậy ra các tai nạn nghiêm trọng.
                                Việc giám sát thủ công bởi con người thường không hiệu quả, tốn kém và không thể bao quát 100% thời gian.
                            </p>
                            <ul className="sol-feature-list">
                                <li><ShieldAlert className="text-red-500" /> Khó kiểm soát 24/7 bằng con người</li>
                                <li><ShieldAlert className="text-red-500" /> Rủi ro pháp lý và an toàn lao động</li>
                                <li><ShieldAlert className="text-red-500" /> Ý thức tuân thủ của nhân sự chưa cao</li>
                            </ul>
                        </div>
                        <div className="sol-media-block">
                            <img src={ppeImg2} alt="Worker Violation" className="rounded-xl shadow-2xl border border-gray-800" />
                        </div>
                    </div>

                    {/* Feature Block 2: The Solution (Video) */}
                    <div className="sol-grid reverse mt-24">
                        <div className="sol-media-block">
                            <video autoPlay loop muted playsInline className="rounded-xl shadow-2xl border border-[#00ff9d]">
                                <source src={ppeVid1} type="video/mp4" />
                            </video>
                            <p className="text-center text-sm text-gray-500 mt-2">Video Demo: Hệ thống phát hiện Real-time</p>
                        </div>
                        <div className="sol-text-block">
                            <h2>Giải Pháp: AI Vision PPE Gate</h2>
                            <p>
                                Hệ thống của Tiva sử dụng Camera AI lắp đặt tại cổng ra vào hoặc khu vực làm việc nguy hiểm. AI sẽ tự động quét và phân tích trang phục của từng người.
                            </p>
                            <div className="feature-card">
                                <HardHat className="text-[#00ff9d] mb-2" size={32} />
                                <h3>Độ Chính Xác > 99%</h3>
                                <p>Phân biệt chính xác Mũ cứng vs Mũ mềm, Áo phản quang vs Áo thường.</p>
                            </div>
                            <div className="feature-card mt-4">
                                <Eye className="text-[#2979ff] mb-2" size={32} />
                                <h3>Logic Cổng Kiểm Soát</h3>
                                <p>Chỉ mở Barrier khi người đó đeo ĐỦ đồ bảo hộ. Nếu thiếu, còi báo động sẽ hú và Barrier đóng chặt.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technical Highlights */}
                    <div className="mt-24 text-center">
                        <h2 className="mb-12">Công Nghệ Lõi</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="tech-item p-6 bg-[#111] rounded-lg border border-gray-800">
                                <h3 className="text-[#00ff9d] text-xl font-bold mb-2">YOLOv8 Engine</h3>
                                <p className="text-gray-400">Model nhẹ, chạy trực tiếp trên Edge Device (Jetson/PC) với tốc độ 30 FPS.</p>
                            </div>
                            <div className="tech-item p-6 bg-[#111] rounded-lg border border-gray-800">
                                <h3 className="text-[#00ff9d] text-xl font-bold mb-2">Evidence Logging</h3>
                                <p className="text-gray-400">Tự động chụp ảnh vi phạm, lưu trữ bằng chứng và gửi báo cáo về Telegram/Zalo.</p>
                            </div>
                            <div className="tech-item p-6 bg-[#111] rounded-lg border border-gray-800">
                                <h3 className="text-[#00ff9d] text-xl font-bold mb-2">Offline Mode</h3>
                                <p className="text-gray-400">Hoạt động bền bỉ ngay cả khi mất kết nối Internet (Local Processing).</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default SolutionPPE;
