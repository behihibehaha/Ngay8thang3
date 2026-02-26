import { motion } from 'framer-motion';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer" id="footer">
            <motion.div
                className="footer-content"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {/* Flower decoration */}
                <div className="footer-flowers">
                    <svg width="200" height="60" viewBox="0 0 200 60" fill="none">
                        <circle cx="40" cy="25" r="10" fill="#f0a6ca" opacity="0.5" />
                        <circle cx="33" cy="32" r="8" fill="#dfc5fe" opacity="0.4" />
                        <circle cx="47" cy="32" r="8" fill="#ffd6e7" opacity="0.4" />
                        <circle cx="40" cy="27" r="4" fill="#fff0f5" />
                        <rect x="38.5" y="35" width="3" height="20" rx="1.5" fill="#7cb67c" opacity="0.4" />

                        <circle cx="100" cy="20" r="12" fill="#dfc5fe" opacity="0.5" />
                        <circle cx="91" cy="29" r="10" fill="#f0a6ca" opacity="0.4" />
                        <circle cx="109" cy="29" r="10" fill="#ffd6e7" opacity="0.4" />
                        <circle cx="100" cy="22" r="5" fill="#fff0f5" />
                        <rect x="98.5" y="33" width="3" height="22" rx="1.5" fill="#7cb67c" opacity="0.4" />

                        <circle cx="160" cy="25" r="10" fill="#ffd6e7" opacity="0.5" />
                        <circle cx="153" cy="32" r="8" fill="#f0a6ca" opacity="0.4" />
                        <circle cx="167" cy="32" r="8" fill="#c084fc" opacity="0.4" />
                        <circle cx="160" cy="27" r="4" fill="#fff0f5" />
                        <rect x="158.5" y="35" width="3" height="20" rx="1.5" fill="#7cb67c" opacity="0.4" />
                    </svg>
                </div>

                <div className="footer-date">
                    <span className="footer-day">8</span>
                    <span className="footer-heart">❤️</span>
                    <span className="footer-month">3</span>
                </div>

                <p className="footer-message">
                    Chúc tất cả phụ nữ luôn hạnh phúc, xinh đẹp và thành công!
                </p>

                <div className="footer-divider" />

                <p className="footer-credit">
                    Made with 💕 • Happy International Women's Day 2026
                </p>
            </motion.div>
        </footer>
    );
}
