import React, { useState } from 'react';
import { Star, ArrowRight, Quote } from 'lucide-react';
import './UserStories.css';

const stories = [
    {
        category: "Construction",
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
        category: "Agriculture",
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
        category: "Logistics",
        client: "Aeon Mall Logistics",
        industry: "Retail & Warehouse",
        initial: "AM",
        quote: "Việc tự động hóa đếm xe và nhận diện biển số giúp giảm thời gian chờ tại cổng kho bãi từ 15 phút xuống còn dưới 30 giây. Dữ liệu được đẩy về Dashboard rất trực quan.",
        metrics: [
            { value: "30x", label: "Tốc độ xử lý" },
            { value: "0", label: "Nhân sự trực cổng" }
        ]
    },
    {
        category: "Retail",
        client: "Circle K Tech",
        industry: "Smart Retail",
        initial: "CK",
        quote: "Giải pháp Shelf Analysis giúp chúng tôi phát hiện quầy hàng rỗng ngay lập tức. Nhân viên được điều phối qua SmartWatch để châm hàng, giúp tăng trải nghiệm mua sắm đáng kể.",
        metrics: [
            { value: "95%", label: "Sẵn sàng hàng hóa" },
            { value: "+15%", label: "Doanh thu" }
        ]
    },
    {
        category: "Retail",
        client: "Highlands Coffee",
        industry: "F&B Service",
        initial: "HC",
        quote: "AI camera của Tiva đếm chính xác số lượng khách trong giờ cao điểm và phân tích cảm xúc khách hàng. Chúng tôi đã tối ưu được lịch làm việc của nhân viên nhờ dữ liệu này.",
        metrics: [
            { value: "98%", label: "Độ chính xác" },
            { value: "Low", label: "Độ trễ <1s" }
        ]
    },
    {
        category: "Industrial",
        client: "VinFast Factory",
        industry: "Automotive",
        initial: "VF",
        quote: "Hệ thống n8n tự động kích hoạt cảnh báo khi Robot Arm đi vào vùng nguy hiểm. Kết hợp với YOLOv8 nhận diện người, dây chuyền hoạt động an toàn tuyệt đối.",
        metrics: [
            { value: "0ms", label: "Downtime ảo" },
            { value: "Auto", label: "Safety Stop" }
        ]
    }
];

const UserStories = () => {
    const [filter, setFilter] = useState("All");

    const categories = ["All", ...new Set(stories.map(s => s.category))];
    const filteredStories = filter === "All" ? stories : stories.filter(s => s.category === filter);

    return (
        <section className="stories-section">
            <div className="container">
                <div className="stories-header">
                    <h2 className="section-title">Câu Chuyện <span className="text-gradient">Thành Công</span></h2>
                    <p className="section-desc">Hơn 50+ doanh nghiệp đã tin tưởng chuyển đổi số cùng Tiva Solutions</p>

                    <div className="stories-filter">
                        {categories.map((cat, index) => (
                            <button
                                key={index}
                                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                                onClick={() => setFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="stories-grid">
                    {filteredStories.map((story, index) => (
                        <div className="story-card" key={index}>
                            <div className="story-header-row">
                                <div className="story-client">
                                    <div className="client-logo">{story.initial}</div>
                                    <div className="client-info">
                                        <h4>{story.client}</h4>
                                        <span className="client-industry">{story.industry}</span>
                                    </div>
                                </div>
                                <Quote size={32} className="quote-icon-bg" />
                            </div>

                            <div className="story-quote">
                                "{story.quote}"
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

                <div className="stories-footer">
                    <button className="btn-outline">Xem Thêm Case Studies <ArrowRight size={16} /></button>
                </div>
            </div>
        </section>
    );
};

export default UserStories;
