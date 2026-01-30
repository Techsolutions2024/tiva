import React from 'react';
import './CTA.css';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="container">
                <h2 className="section-title">Bắt Đầu Hành Trình <span className="text-gradient">Chuyển Đổi Số</span></h2>
                <p className="section-desc">Chọn gói giải pháp phù hợp với quy mô doanh nghiệp của bạn</p>

                <div className="cta-grid">
                    <div className="cta-card">
                        <h3 className="cta-title">Dự án Thí điểm</h3>
                        <p className="cta-text">Đăng ký Demo: Trải nghiệm thử nghiệm Edge AI ngay tại cơ sở của bạn trong 2 tuần.</p>
                        <button className="btn-cta">Đăng Ký Demo</button>
                    </div>

                    <div className="cta-card featured">
                        <h3 className="cta-title">Tư vấn Giải pháp</h3>
                        <p className="cta-text">Nhận tư vấn giải pháp Chuyển đổi số 1:1 cùng chuyên gia cấp cao.</p>
                        <button className="btn-cta">Kết Nối Chuyên Gia</button>
                    </div>

                    <div className="cta-card">
                        <h3 className="cta-title">Hợp tác Đối tác</h3>
                        <p className="cta-text">Hợp tác cùng phát triển hệ sinh thái AIoT bền vững & chia sẻ lợi nhuận.</p>
                        <button className="btn-cta">Trở Thành Đối Tác</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
