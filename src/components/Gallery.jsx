import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import greetings from './greetings';
import './Gallery.css';

// Import images
import hai from '../assets/hai.png';
import hoanghuthuoc from '../assets/hoanghuthuoc.png';
import image from '../assets/image.png';
import minhhoangduc from '../assets/minhhoangduc.png';

const illustrations = [
    {
        id: 1,
        title: 'Sắc hoa dành tặng',
        emoji: '🌸🌷🌹',
        color: '#fff0f5',
        accent: '#f0a6ca',
        image: hai,
    },
    {
        id: 2,
        title: 'Sức mạnh dịu dàng',
        emoji: '💪✨👩‍👩‍👧',
        color: '#f3e8ff',
        accent: '#c084fc',
        image: hoanghuthuoc,
    },
    {
        id: 3,
        title: 'Khoảnh khắc bình yên',
        emoji: '📖🌿☕',
        color: '#fff1e6',
        accent: '#f0a6ca',
        image: image,
    },
    {
        id: 4,
        title: 'Niềm vui rạng ngời',
        emoji: '💃🎉🌟',
        color: '#ffd6e7',
        accent: '#d45d8a',
        image: minhhoangduc,
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.15,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
        },
    }),
};

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.25 } },
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
    exit: {
        opacity: 0,
        scale: 0.85,
        y: 30,
        transition: { duration: 0.3, ease: 'easeIn' },
    },
};

const sparkleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
        scale: [0, 1.2, 0.8, 1],
        opacity: [0, 1, 1, 0.7],
        transition: { delay: 0.3 + i * 0.1, duration: 0.6, ease: 'easeOut' },
    }),
};

function getRandomGreeting() {
    return greetings[Math.floor(Math.random() * greetings.length)];
}

export default function Gallery() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [currentGreeting, setCurrentGreeting] = useState('');

    const handleCardClick = useCallback((item) => {
        setSelectedCard(item);
        setCurrentGreeting(getRandomGreeting());
    }, []);

    const handleClose = () => setSelectedCard(null);

    const handleNewGreeting = () => {
        setCurrentGreeting(getRandomGreeting());
    };

    return (
        <section className="gallery" id="gallery">
            <div className="section-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    Vườn Đào
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    Nhấn vào mỗi bức tranh để nhận lời chúc dành riêng cho bạn ✨
                </motion.p>

                <div className="gallery-grid">
                    {illustrations.map((item, i) => (
                        <motion.div
                            key={item.id}
                            className="gallery-card glass-card"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            custom={i}
                            whileHover={{
                                scale: 1.05,
                                rotate: i % 2 === 0 ? 2 : -2,
                                transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
                            }}
                            onClick={() => handleCardClick(item)}
                        >
                            <div className="gallery-card-illustration" style={{ backgroundColor: item.color }}>
                                <img src={item.image} alt={item.title} className="gallery-card-img" />
                            </div>
                            <div className="gallery-card-content">
                                <h3 className="gallery-card-title" style={{ color: item.accent }}>
                                    {item.title}
                                </h3>
                                <span className="gallery-card-hint">Nhấn để nhận lời chúc ✨</span>
                            </div>
                            <div className="gallery-card-glow" style={{ background: item.accent }} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedCard && (
                    <motion.div
                        className="gallery-modal-overlay"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={handleClose}
                    >
                        <motion.div
                            className="gallery-modal"
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                            style={{ '--modal-accent': selectedCard.accent }}
                        >
                            {/* Close button */}
                            <button className="gallery-modal-close" onClick={handleClose} aria-label="Đóng">
                                ✕
                            </button>

                            {/* Sparkle decorations */}
                            {[0, 1, 2, 3, 4].map((i) => (
                                <motion.div
                                    key={i}
                                    className={`modal-sparkle modal-sparkle-${i}`}
                                    variants={sparkleVariants}
                                    initial="hidden"
                                    animate="visible"
                                    custom={i}
                                >
                                    ✦
                                </motion.div>
                            ))}

                            {/* SVG illustration */}
                            <motion.div
                                className="gallery-modal-illustration"
                                style={{ backgroundColor: selectedCard.color }}
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <img src={selectedCard.image} alt={selectedCard.title} className="gallery-modal-img" />
                            </motion.div>

                            {/* Content */}
                            <motion.div
                                className="gallery-modal-content"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                <div className="gallery-modal-emoji">{selectedCard.emoji}</div>
                                <h3 className="gallery-modal-title" style={{ color: selectedCard.accent }}>
                                    {selectedCard.title}
                                </h3>

                                {/* Random greeting */}
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={currentGreeting}
                                        className="gallery-modal-greeting"
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        {currentGreeting}
                                    </motion.p>
                                </AnimatePresence>

                                {/* Button to get another greeting */}
                                <motion.button
                                    className="gallery-modal-btn"
                                    onClick={handleNewGreeting}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{ '--btn-color': selectedCard.accent }}
                                >
                                    🎲 Lời chúc khác
                                </motion.button>

                                <motion.div
                                    className="gallery-modal-heart"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                                >
                                    💖
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
