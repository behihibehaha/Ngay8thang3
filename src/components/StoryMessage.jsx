import { motion } from 'framer-motion';
import './StoryMessage.css';

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function StoryMessage() {
    return (
        <section className="story" id="message">
            <motion.div
                className="section-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Decorative flower divider */}
                <motion.div className="flower-divider" variants={itemVariants}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <circle cx="20" cy="10" r="8" fill="#f0a6ca" opacity="0.7" />
                        <circle cx="11" cy="18" r="8" fill="#dfc5fe" opacity="0.6" />
                        <circle cx="29" cy="18" r="8" fill="#ffd6e7" opacity="0.6" />
                        <circle cx="14" cy="28" r="8" fill="#c084fc" opacity="0.5" />
                        <circle cx="26" cy="28" r="8" fill="#f0a6ca" opacity="0.5" />
                        <circle cx="20" cy="20" r="5" fill="#fff0f5" />
                    </svg>
                </motion.div>

                <motion.h2 className="section-title" variants={itemVariants}>
                    Lời Yêu Thương
                </motion.h2>

                <motion.p className="section-subtitle" variants={itemVariants}>
                    Nhân ngày Quốc tế Phụ nữ 8/3
                </motion.p>

                <motion.div className="story-card glass-card" variants={itemVariants}>
                    <div className="story-icon">💌</div>
                    <p className="story-text">
                        Gửi đến những người phụ nữ tuyệt vời nhất,
                    </p>
                    <p className="story-text story-text-main">
                        Cảm ơn vì tất cả tình yêu thương, sự hy sinh và nỗ lực không ngừng nghỉ
                        mà các bạn dành cho cuộc sống này. Các bạn là nguồn cảm hứng, là ánh sáng,
                        là sức mạnh dịu dàng nhưng vô cùng phi thường.
                    </p>
                    <p className="story-text story-text-main">
                        Mỗi nụ cười của các bạn làm thế giới thêm tươi đẹp, mỗi bước chân các bạn
                        đi tạo nên những con đường mới. Hãy luôn tự hào về chính mình, vì các bạn
                        xứng đáng nhận được tất cả những điều tốt đẹp nhất.
                    </p>
                    <p className="story-sign">
                        — Với tất cả yêu thương 🌷
                    </p>

                    {/* Decorative corners */}
                    <div className="story-corner story-corner-tl" />
                    <div className="story-corner story-corner-br" />
                </motion.div>

                {/* Bottom decoration */}
                <motion.div className="story-bottom-deco" variants={itemVariants}>
                    <svg width="200" height="30" viewBox="0 0 200 30" fill="none">
                        <path d="M0 15 Q 25 0, 50 15 T 100 15 T 150 15 T 200 15" stroke="#f0a6ca" strokeWidth="1.5" fill="none" opacity="0.5" />
                        <path d="M0 20 Q 25 5, 50 20 T 100 20 T 150 20 T 200 20" stroke="#dfc5fe" strokeWidth="1" fill="none" opacity="0.3" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}
