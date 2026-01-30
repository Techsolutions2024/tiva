import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, TrendingUp, Users, ScanLine, LayoutDashboard } from 'lucide-react';
import './SolutionPage.css';

// Import assets
import retail1 from '../assets/retail_1.png'; // Shelf
import retail2 from '../assets/retail_2.png'; // Queue
import retail3 from '../assets/retail_3.png'; // Heatmap
import retail4 from '../assets/retail_4.png'; // Glove check/Food

const SolutionRetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="solution-page">
            <section className="sol-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(${retail3})` }}>
                <div className="container">
                    <span className="sol-badge badge-blue">Smart Retail</span>
                    <h1 className="sol-title">AI Cho Ngành Bán Lẻ & Dịch Vụ</h1>
                    <p className="sol-subtitle">Tối ưu hóa trải nghiệm khách hàng và vận hành cửa hàng bằng dữ liệu hình ảnh thời gian thực.</p>
                </div>
            </section>

            <section className="sol-content section-padding">
                <div className="container">

                    {/* Solution 1: Shelf Analysis */}
                    <div className="sol-grid mb-24">
                        <div className="sol-text-block">
                            <h3 className="text-[#2979ff] font-bold uppercase tracking-wider mb-2">Shelf Intelligence</h3>
                            <h2>Giám Sát Quầy Kệ Tự Động</h2>
                            <p>
                                Không còn cảnh khách hàng thất vọng vì hết hàng. AI camera liên tục quét các kệ hàng để phát hiện vị trí trống (Stock-out) hoặc sản phẩm bị để sai vị trí (Misplaced).
                            </p>
                            <ul className="sol-feature-list">
                                <li><Check className="text-[#2979ff]" /> Cảnh báo Restock thời gian thực tới nhân viên kho.</li>
                                <li><Check className="text-[#2979ff]" /> Đánh giá sự tuân thủ trưng bày (Planogram Compliance).</li>
                                <li><Check className="text-[#2979ff]" /> Tăng 15% doanh số nhờ hàng hóa luôn sẵn sàng.</li>
                            </ul>
                        </div>
                        <div className="sol-media-block">
                            <img src={retail1} alt="Shelf Analysis" className="rounded-xl shadow-2xl border border-gray-800 hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>

                    {/* Solution 2: Customer Flow & Heatmap */}
                    <div className="sol-grid reverse mb-24">
                        <div className="sol-media-block">
                            <img src={retail2} alt="Heatmap Flow" className="rounded-xl shadow-2xl border border-gray-800 hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="sol-text-block">
                            <h3 className="text-[#2979ff] font-bold uppercase tracking-wider mb-2">Store Analytics</h3>
                            <h2>Thấu Hiểu Hành Vi Khách Hàng</h2>
                            <p>
                                Biến Camera CCTV thường thành cảm biến dữ liệu mạnh mẽ. Hiểu rõ khách hàng đi đâu, dừng lại ở đâu lâu nhất trong cửa hàng của bạn.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="p-4 bg-[rgba(41,121,255,0.1)] rounded-lg">
                                    <TrendingUp className="text-[#2979ff] mb-2" />
                                    <h4 className="font-bold text-white">Heatmap</h4>
                                    <p className="text-sm text-gray-400">Vùng nóng/lạnh trong cửa hàng.</p>
                                </div>
                                <div className="p-4 bg-[rgba(41,121,255,0.1)] rounded-lg">
                                    <Users className="text-[#2979ff] mb-2" />
                                    <h4 className="font-bold text-white">Counting</h4>
                                    <p className="text-sm text-gray-400">Đếm lưu lượng khách ra vào.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Solution 3: Food Safety & Queue */}
                    <div className="sol-grid">
                        <div className="sol-text-block">
                            <h3 className="text-[#2979ff] font-bold uppercase tracking-wider mb-2">QSR Operations</h3>
                            <h2>Vận Hành Bếp & Xếp Hàng</h2>
                            <p>
                                Trong ngành F&B, tốc độ và vệ sinh là tối quan trọng.
                            </p>
                            <ul className="sol-feature-list mt-4">
                                <li><ScanLine className="text-[#2979ff] float-left mr-3" /> <strong>Giám sát găng tay:</strong> AI phát hiện nhân viên bếp có đeo găng tay khi chế biến thực phẩm hay không.</li>
                                <li className="mt-4"><LayoutDashboard className="text-[#2979ff] float-left mr-3" /> <strong>Quản lý hàng đợi:</strong> Đo lường độ dài hàng chờ thanh toán để mở thêm quầy tính tiền kịp thời.</li>
                            </ul>
                        </div>
                        <div className="sol-media-block grid grid-rows-2 gap-4">
                            <img src={retail4} alt="Food Safety" className="rounded-xl shadow-lg border border-gray-800 object-cover h-48 w-full" />
                            <img src={retail3} alt="Queue Management" className="rounded-xl shadow-lg border border-gray-800 object-cover h-48 w-full" />
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default SolutionRetail;
