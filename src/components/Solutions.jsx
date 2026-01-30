import React from 'react';
import { ShieldCheck, TrendingUp, Sprout, Workflow, CheckCircle } from 'lucide-react';
import './Solutions.css';

const solutionsData = [
    {
        icon: <ShieldCheck size={28} />,
        title: "Công Trường Thông Minh",
        subtitle: "Construction Site Safety & Control",
        features: [
            "PPE Gate Control: FaceID + Mũ/Áo bảo hộ",
            "Vehicle AI: Nhận diện biển số & đếm xe",
            "Cảnh báo rủi ro tức thời",
            "Tích hợp Barrier tự động"
        ]
    },
    {
        icon: <TrendingUp size={28} />,
        title: "Bán Lẻ Thông Minh",
        subtitle: "Smart Retail & Analytics",
        features: [
            "VIP Greeting: Nhận diện khách VIP",
            "Heatmap & Đếm người ra vào",
            "Chấm công AI FaceID không chạm",
            "Tối ưu trải nghiệm khách hàng"
        ]
    },
    {
        icon: <Sprout size={28} />,
        title: "Nông Nghiệp CNC",
        subtitle: "AgriTech & LoRaWAN",
        features: [
            "AI Diagnosis: Chẩn đoán bệnh cây trồng",
            "IoT Control: Điều khiển tưới tiêu từ xa",
            "Kết nối LoRaWAN > 5km",
            "Giám sát môi trường 24/7"
        ]
    },
    {
        icon: <Workflow size={28} />,
        title: "Siêu Tự Động Hóa",
        subtitle: "Hyper Automation with n8n",
        features: [
            "Orchestration luồng dữ liệu phức tạp",
            "Cảnh báo đa kênh: Telegram, Email, SMS",
            "Tự động lưu trữ bằng chứng lên AWS S3",
            "Báo cáo tự động Google Sheets/Databases"
        ]
    }
];

const Solutions = () => {
    return (
        <section className="solutions-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Giải Pháp <span className="text-gradient">Đột Phá</span></h2>
                    <p className="section-desc">
                        Ứng dụng AI & IoT để giải quyết các bài toán thực tế trong Công nghiệp và Đời sống.
                    </p>
                </div>

                <div className="solutions-grid">
                    {solutionsData.map((item, index) => (
                        <div className="solution-card" key={index}>
                            <div className="card-icon">{item.icon}</div>
                            <h3 className="card-title">{item.title}</h3>
                            <span className="card-subtitle">{item.subtitle}</span>
                            <ul className="feature-list">
                                {item.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="feature-item">
                                        <CheckCircle size={16} className="feature-icon" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
