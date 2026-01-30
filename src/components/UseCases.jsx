import React from 'react';
import { ArrowRight, ChevronRight, Activity, ShoppingCart, Truck } from 'lucide-react';
import './UseCases.css';

import imgShelf from '../assets/retail_1.png';
import imgHeatmap from '../assets/retail_3.png';
import imgQueue from '../assets/retail_2.png';

const cases = [
    {
        image: imgShelf,
        title: "Analyze Product Displays",
        category: "Smart Retail",
        desc: "Giám sát kệ hàng thời gian thực. Phát hiện hàng hết, sai vị trí và tuân thủ trưng bày (Planogram).",
        features: ["Stockout Detection", "Planogram Compliance"]
    },
    {
        image: imgHeatmap,
        title: "Understand Customer Flow",
        category: "Store Analytics",
        desc: "Theo dõi hành trình di chuyển, thời gian dừng chân và bản đồ nhiệt. Tối ưu bố trí cửa hàng.",
        features: ["Heatmap & Dwell Time", "Traffic Flow"]
    },
    {
        image: imgQueue,
        title: "Monitor Queues & Turnover",
        category: "QSR & Service",
        desc: "Đo lường độ dài hàng đợi. Giảm thời gian chờ và nâng cao hiệu quả phục vụ tại quầy thanh toán/Drive-thru.",
        features: ["Queue Length", "Wait Time Analysis"]
    }
];

const UseCases = () => {
    return (
        <section className="use-cases-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Ứng Dụng <span className="text-gradient">Thực Tế</span></h2>
                    <p className="section-desc">Công nghệ AI Vision đang thay đổi cách vận hành doanh nghiệp</p>
                </div>

                <div className="use-cases-grid">
                    {cases.map((item, index) => (
                        <div className="use-case-card" key={index}>
                            <div className="case-image-wrapper">
                                <img src={item.image} alt={item.title} className="case-image" />
                                <div className="case-overlay">
                                    <span className="case-category">{item.category}</span>
                                </div>
                            </div>

                            <div className="case-content">
                                <h3 className="case-title">{item.title}</h3>
                                <p className="case-desc">{item.desc}</p>

                                <div className="case-features">
                                    {item.features.map((feature, fPos) => (
                                        <span key={fPos} className="feature-tag">
                                            <ChevronRight size={14} className="text-primary inline mr-1" />
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
