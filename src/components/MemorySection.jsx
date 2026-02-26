import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MemorySection.css';
import memoryImg from '../assets/BBBB.png';

export default function MemorySection() {
    const [isZoomed, setIsZoomed] = useState(false);

    return (
        <section className="memory" id="memory">
            <div className="section-container">
                <motion.div
                    className="memory-card glass-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="memory-image-container" onClick={() => setIsZoomed(true)}>
                        <img src={memoryImg} alt="Kỷ niệm đẹp" className="memory-image" />
                        <div className="memory-image-overlay">
                            <span>🔍 Nhấn để xem rõ hơn</span>
                        </div>
                    </div>
                    <div className="memory-content">
                        <h2 className="section-title">Khoảnh Khắc Đáng Nhớ</h2>
                        <div className="memory-wishes">
                            <p>🌟 Luôn tự tin và toả sáng nhé!</p>
                            <p>💖 Hạnh phúc sẽ luôn mỉm cười với chị em.</p>
                            <p>🌸 Mãi mãi xinh đẹp như những đoá hoa.</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Zoom Modal */}
            <AnimatePresence>
                {isZoomed && (
                    <motion.div
                        className="memory-zoom-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsZoomed(false)}
                    >
                        <motion.button
                            className="memory-zoom-close"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            onClick={() => setIsZoomed(false)}
                        >
                            ✕
                        </motion.button>
                        <motion.img
                            src={memoryImg}
                            className="memory-zoom-image"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        />
                        <motion.div
                            className="memory-zoom-hint"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ delay: 0.2 }}
                        >
                            Nhấn bên ngoài để đóng
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
