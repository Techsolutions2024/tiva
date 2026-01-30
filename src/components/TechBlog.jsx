import React from 'react';
import { ArrowRight, Calendar, Code } from 'lucide-react';
import './TechBlog.css';

const posts = [
    {
        title: "Tối ưu hóa YOLOv8 trên NVIDIA Jetson Nano",
        excerpt: "Hướng dẫn chi tiết cách Quantization mô hình YOLOv8 n xuống INT8 để đạt 30 FPS trên thiết bị Edge giá rẻ mà không giảm quá nhiều độ chính xác.",
        tags: ["YOLOv8", "Jetson", "Optimization"],
        date: "15 Jan, 2024",
        codeSnippet: "model.export(format='engine', device=0, half=True)"
    },
    {
        title: "Xây dựng luồng tự động hóa với n8n và MQTT",
        excerpt: "Kết nối cảm biến IoT với n8n thông qua MQTT Broker. Thiết lập quy trình tự động gửi cảnh báo Telegram khi nhiệt độ vượt ngưỡng.",
        tags: ["n8n", "MQTT", "Automation"],
        date: "22 Jan, 2024",
        codeSnippet: "const client = mqtt.connect('mqtt://broker.hivemq.com')"
    },
    {
        title: "Edge AI vs Cloud AI: Khi nào nên xử lý tại biên?",
        excerpt: "Phân tích ưu nhược điểm của Edge Computing so với Cloud Computing trong các bài toán yêu cầu độ trễ thấp và bảo mật dữ liệu.",
        tags: ["Edge AI", "Architecture", "Cloud"],
        date: "28 Jan, 2024",
        codeSnippet: "Latency: Edge (<50ms) vs Cloud (>500ms)"
    }
];

const TechBlog = () => {
    return (
        <section className="blog-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Góc <span className="text-secondary-glow" style={{ color: 'var(--color-secondary)' }}>Kỹ Thuật</span></h2>
                    <p className="section-desc">Chia sẻ kiến thức chuyên sâu về AIoT & Edge Computing</p>
                </div>

                <div className="blog-grid">
                    {posts.map((post, index) => (
                        <article className="blog-card" key={index}>
                            <div className="blog-image">
                                <div className="code-overlay">
                                    <Code size={16} className="mb-2 opacity-50" />
                                    <pre>{post.codeSnippet}</pre>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-tags">
                                    {post.tags.map((tag, tIndex) => (
                                        <span key={tIndex} className="blog-tag">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="blog-title">{post.title}</h3>
                                <p className="blog-excerpt">{post.excerpt}</p>
                                <div className="blog-meta">
                                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                                    <a href="#" className="read-more">Đọc tiếp <ArrowRight size={14} /></a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechBlog;
