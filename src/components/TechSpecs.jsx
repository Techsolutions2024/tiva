import React from 'react';
import { Server, Wifi, Cloud, Monitor } from 'lucide-react';
import './TechSpecs.css';

const specs = [
    {
        icon: <Server size={32} />,
        title: "Edge AI Engine",
        desc: "Mô hình YOLOv8/v11 tùy biến. Tối ưu hóa trên NVIDIA Jetson & ESP32. Độ trễ < 50ms.",
        tech: ["YOLOv8", "TensorRT", "Edge Impulse"]
    },
    {
        icon: <Wifi size={32} />,
        title: "LoRaWAN Connectivity",
        desc: "Mạng diện rộng công suất thấp. Kết nối > 10km. Bảo mật 2 lớp AES-128.",
        tech: ["Class A/C", "Private Gateway", "868/915 MHz"]
    },
    {
        icon: <Cloud size={32} />,
        title: "Hybrid Cloud Architecture",
        desc: "Xử lý tức thời tại Edge. Lưu trữ dài hạn & Analytics trên Cloud AWS.",
        tech: ["AWS IoT Core", "S3", "DynamoDB"]
    },
    {
        icon: <Monitor size={32} />,
        title: "Centralized Platform",
        desc: "Dashboard quản trị tập trung. Trực quan hóa dữ liệu theo thời gian thực.",
        tech: ["ReactJS", "Grafana", "WebSocket"]
    }
];

const TechSpecs = () => {
    return (
        <section className="tech-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Thông Số <span className="text-secondary-glow" style={{ color: 'var(--color-secondary)' }}>Kỹ Thuật</span></h2>
                </div>

                <div className="tech-grid">
                    {specs.map((spec, index) => (
                        <div key={index} className="tech-card">
                            <div className="tech-icon">
                                {spec.icon}
                            </div>
                            <div className="tech-content">
                                <h3 className="tech-title">{spec.title}</h3>
                                <p className="tech-desc">{spec.desc}</p>
                                <div className="tech-tags">
                                    {spec.tech.map((t, i) => (
                                        <span key={i} className="tech-tag">
                                            {t}
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

export default TechSpecs;
