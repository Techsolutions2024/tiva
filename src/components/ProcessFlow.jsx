import React from 'react';
import { Camera, Cpu, Zap, LayoutDashboard } from 'lucide-react';
import './ProcessFlow.css';

const steps = [
    {
        icon: <Camera size={32} />,
        title: "Cảm Biến / Camera",
        desc: "Thu thập dữ liệu hình ảnh & tín hiệu môi trường"
    },
    {
        icon: <Cpu size={32} />,
        title: "Edge AI",
        desc: "Xử lý tại biên (On-device) với YOLO & TinyML"
    },
    {
        icon: <Zap size={32} />,
        title: "n8n Automation",
        desc: "Tự động hóa luồng logic & gửi cảnh báo"
    },
    {
        icon: <LayoutDashboard size={32} />,
        title: "Dashboard",
        desc: "Trực quan hóa dữ liệu & Báo cáo Realtime"
    }
];

const ProcessFlow = () => {
    return (
        <section className="process-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Quy Trình <span className="text-secondary-glow" style={{ color: 'var(--color-secondary)' }}>Xử Lý Thông Minh</span></h2>
                    <p className="section-desc">Từ dữ liệu thô đến quyết định hành động trong mili-giây</p>
                </div>

                <div className="process-container">
                    <div className="process-connector">
                        <div className="process-connector-fill"></div>
                    </div>

                    {steps.map((step, index) => (
                        <div className="process-step" key={index}>
                            <div className="step-icon-box">
                                {step.icon}
                            </div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-desc">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessFlow;
