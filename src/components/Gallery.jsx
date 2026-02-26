import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import greetings from './greetings';
import './Gallery.css';

const illustrations = [
    {
        id: 1,
        title: 'Sắc hoa dành tặng',
        emoji: '🌸🌷🌹',
        color: '#fff0f5',
        accent: '#f0a6ca',
        svg: (
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="60" r="25" fill="#f0a6ca" opacity="0.3" />
                <ellipse cx="100" cy="130" rx="35" ry="50" fill="#dfc5fe" opacity="0.25" />
                <circle cx="100" cy="55" r="18" fill="#ffd6e7" />
                <path d="M85 75 Q100 95 115 75" fill="#f0a6ca" opacity="0.6" />
                <rect x="95" y="78" width="10" height="55" rx="5" fill="#dfc5fe" opacity="0.5" />
                <circle cx="60" cy="90" r="12" fill="#f0a6ca" opacity="0.6" />
                <circle cx="52" cy="98" r="10" fill="#ffd6e7" opacity="0.5" />
                <circle cx="68" cy="98" r="10" fill="#c084fc" opacity="0.4" />
                <circle cx="60" cy="92" r="5" fill="#fff0f5" />
                <circle cx="140" cy="85" r="14" fill="#dfc5fe" opacity="0.6" />
                <circle cx="130" cy="95" r="11" fill="#ffd6e7" opacity="0.5" />
                <circle cx="150" cy="95" r="11" fill="#f0a6ca" opacity="0.4" />
                <circle cx="140" cy="88" r="6" fill="#fff0f5" />
                <ellipse cx="55" cy="115" rx="6" ry="15" fill="#7cb67c" opacity="0.3" transform="rotate(-20 55 115)" />
                <ellipse cx="145" cy="110" rx="6" ry="15" fill="#7cb67c" opacity="0.3" transform="rotate(20 145 110)" />
                <circle cx="45" cy="50" r="4" fill="#ffd6e7" opacity="0.4" />
                <circle cx="155" cy="45" r="3" fill="#c084fc" opacity="0.3" />
                <circle cx="75" cy="35" r="3" fill="#f0a6ca" opacity="0.3" />
                <circle cx="130" cy="40" r="4" fill="#dfc5fe" opacity="0.4" />
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Sức mạnh dịu dàng',
        emoji: '💪✨👩‍👩‍👧',
        color: '#f3e8ff',
        accent: '#c084fc',
        svg: (
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="70" cy="65" r="16" fill="#ffd6e7" />
                <circle cx="100" cy="55" r="18" fill="#dfc5fe" />
                <circle cx="130" cy="65" r="16" fill="#f0a6ca" />
                <rect x="62" y="85" width="16" height="50" rx="8" fill="#ffd6e7" opacity="0.6" />
                <rect x="92" y="78" width="16" height="55" rx="8" fill="#dfc5fe" opacity="0.6" />
                <rect x="122" y="85" width="16" height="50" rx="8" fill="#f0a6ca" opacity="0.6" />
                <path d="M50 40 L52 35 L54 40 L59 42 L54 44 L52 49 L50 44 L45 42Z" fill="#c084fc" opacity="0.5" />
                <path d="M145 35 L147 30 L149 35 L154 37 L149 39 L147 44 L145 39 L140 37Z" fill="#f0a6ca" opacity="0.5" />
                <path d="M100 25 L101.5 21 L103 25 L107 26.5 L103 28 L101.5 32 L100 28 L96 26.5Z" fill="#ffd6e7" opacity="0.6" />
                <path d="M85 160 C85 155 78 148 70 155 C62 148 55 155 55 160 C55 170 70 180 70 180 C70 180 85 170 85 160Z" fill="#f0a6ca" opacity="0.3" />
                <path d="M145 155 C145 150 138 143 130 150 C122 143 115 150 115 155 C115 165 130 175 130 175 C130 175 145 165 145 155Z" fill="#c084fc" opacity="0.3" />
                <path d="M70 110 Q100 125 130 110" stroke="#dfc5fe" strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="4 4" />
            </svg>
        ),
    },
    {
        id: 3,
        title: 'Khoảnh khắc bình yên',
        emoji: '📖🌿☕',
        color: '#fff1e6',
        accent: '#f0a6ca',
        svg: (
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="75" r="14" fill="#ffd6e7" />
                <rect x="93" y="92" width="14" height="40" rx="7" fill="#dfc5fe" opacity="0.5" />
                <rect x="80" y="115" width="20" height="14" rx="2" fill="#f0a6ca" opacity="0.6" />
                <rect x="80" y="115" width="10" height="14" rx="1" fill="#ffd6e7" opacity="0.4" />
                <rect x="145" y="90" width="10" height="80" rx="5" fill="#7cb67c" opacity="0.4" />
                <circle cx="150" cy="60" r="35" fill="#7cb67c" opacity="0.2" />
                <circle cx="135" cy="70" r="25" fill="#7cb67c" opacity="0.15" />
                <circle cx="165" cy="70" r="25" fill="#7cb67c" opacity="0.15" />
                <circle cx="130" cy="50" r="5" fill="#f0a6ca" opacity="0.6" />
                <circle cx="145" cy="40" r="4" fill="#ffd6e7" opacity="0.5" />
                <circle cx="160" cy="48" r="5" fill="#dfc5fe" opacity="0.5" />
                <circle cx="170" cy="60" r="4" fill="#f0a6ca" opacity="0.4" />
                <circle cx="138" cy="65" r="3" fill="#ffd6e7" opacity="0.5" />
                <path d="M50 50 Q55 45 50 40 Q45 45 50 50Z" fill="#c084fc" opacity="0.4" />
                <path d="M50 50 Q55 55 50 60 Q45 55 50 50Z" fill="#dfc5fe" opacity="0.3" />
                <path d="M70 30 Q75 25 70 20 Q65 25 70 30Z" fill="#f0a6ca" opacity="0.3" />
                <path d="M70 30 Q75 35 70 40 Q65 35 70 30Z" fill="#ffd6e7" opacity="0.3" />
                <ellipse cx="100" cy="175" rx="80" ry="8" fill="#7cb67c" opacity="0.1" />
            </svg>
        ),
    },
    {
        id: 4,
        title: 'Niềm vui rạng ngời',
        emoji: '💃🎉🌟',
        color: '#ffd6e7',
        accent: '#d45d8a',
        svg: (
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="50" r="18" fill="#ffd6e7" />
                <path d="M88 72 Q100 110 80 140" stroke="#dfc5fe" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.5" />
                <path d="M112 72 Q100 110 120 140" stroke="#dfc5fe" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.5" />
                <path d="M95 80 Q70 55 55 65" stroke="#ffd6e7" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.6" />
                <path d="M105 80 Q130 55 145 65" stroke="#ffd6e7" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.6" />
                <rect x="35" y="30" width="8" height="3" rx="1.5" fill="#f0a6ca" opacity="0.6" transform="rotate(30 35 30)" />
                <rect x="160" y="25" width="8" height="3" rx="1.5" fill="#c084fc" opacity="0.6" transform="rotate(-20 160 25)" />
                <rect x="50" y="100" width="6" height="3" rx="1.5" fill="#dfc5fe" opacity="0.5" transform="rotate(45 50 100)" />
                <rect x="150" y="95" width="6" height="3" rx="1.5" fill="#ffd6e7" opacity="0.5" transform="rotate(-30 150 95)" />
                <circle cx="40" cy="60" r="3" fill="#ffd9b3" opacity="0.5" />
                <circle cx="160" cy="55" r="3" fill="#f0a6ca" opacity="0.5" />
                <circle cx="45" cy="130" r="2" fill="#c084fc" opacity="0.4" />
                <circle cx="155" cy="125" r="2" fill="#dfc5fe" opacity="0.4" />
                <path d="M30 90 L32 85 L34 90 L39 92 L34 94 L32 99 L30 94 L25 92Z" fill="#f0a6ca" opacity="0.4" />
                <path d="M165 85 L167 80 L169 85 L174 87 L169 89 L167 94 L165 89 L160 87Z" fill="#c084fc" opacity="0.4" />
                <circle cx="70" cy="170" r="8" fill="#f0a6ca" opacity="0.3" />
                <circle cx="100" cy="165" r="10" fill="#dfc5fe" opacity="0.3" />
                <circle cx="130" cy="170" r="8" fill="#ffd6e7" opacity="0.3" />
            </svg>
        ),
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
                    Vẻ Đẹp Phụ Nữ
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
                                {item.svg}
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
                                {selectedCard.svg}
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
