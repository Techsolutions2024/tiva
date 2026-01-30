import React from 'react';
import { Star } from 'lucide-react';
import './UserStories.css';

const stories = [
    {
        client: "Hung Thinh Corp",
        industry: "Construction",
        initial: "HT",
        quote: "Hệ thống PPE Gate của AIoT Edge đã giúp chúng tôi loại bỏ hoàn toàn việc nhân sự quên đồ bảo hộ khi vào công trường. Một bước tiến lớn về an toàn lao động.",
        metrics: [
            { value: "100%", label: "Tuân thủ an toàn" },
            { value: "-40%", label: "Giảm tai nạn" }
        ]
    },
    {
        client: "GreenFarm Da Lat",
        industry: "High-Tech Agriculture",
        initial: "GF",
        quote: "Nhờ mạng lưới cảm biến LoRa và AI chẩn đoán bệnh sớm, chúng tôi đã cứu được 3 vụ mùa cà chua khỏi bệnh sương mai. Hệ thống hoạt động cực kỳ ổn định dù ở vùng đồi núi.",
        metrics: [
            { value: "20%", label: "Tăng năng suất" },
            { value: "24/7", label: "Giám sát tự động" }
        ]
    },
    {
        client: "Aeon Mall Logistics",
        industry: "Retail & Warehouse",
        initial: "AM",
        quote: "Việc tự động hóa đếm xe và nhận diện biển số giúp giảm thời gian chờ tại cổng kho bãi từ 15 phút xuống còn dưới 30 giây. Dữ liệu được đẩy về Dashboard rất trực quan.",
        metrics: [
            { value: "30x", label: "Tốc độ xử lý" },
            { value: "0", label: "Nhân sự trực cổng" }
        ]
    }
];

const UserStories = () => {
    return (
        <section className="stories-section">
            <div className="container">
                <div className="stories-header">
                    <h2 className="section-title">Câu Chuyện <span className="text-gradient">Thành Công</span></h2>
                    <p className="section-desc">Khách hàng nói gì về giải pháp của chúng tôi</p>
                </div>

                <div className="stories-grid">
                    {stories.map((story, index) => (
                        <div className="story-card" key={index}>
                            <div className="story-client">
                                <div className="client-logo">{story.initial}</div>
                                <div className="client-info">
                                    <h4>{story.client}</h4>
                                    <span className="client-industry">{story.industry}</span>
                                </div>
                            </div>

                            <div className="story-quote">
                                {story.quote}
                            </div>

                            <div className="story-metrics">
                                {story.metrics.map((metric, mIndex) => (
                                    <div key={mIndex} className="metric-item">
                                        <span className="metric-value">{metric.value}</span>
                                        <span className="metric-label">{metric.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UserStories;
