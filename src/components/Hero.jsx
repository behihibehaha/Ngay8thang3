import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './Hero.css';

const letterVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -90 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            delay: 0.5 + i * 0.05,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
        },
    }),
};

const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 2.2, duration: 1, ease: 'easeOut' },
    },
};

const dateVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: 1.8,
            duration: 0.8,
            ease: [0.34, 1.56, 0.64, 1],
        },
    },
};

const flowerSvgVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: {
        scale: 1,
        rotate: 0,
        opacity: 1,
        transition: { delay: 2.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
};

const title = 'Happy Women\'s Day';

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section className="hero" ref={ref} id="hero">
            <motion.div className="hero-bg" style={{ y: backgroundY }}>
                <div className="hero-gradient" />
                <div className="hero-orbs">
                    <div className="orb orb-1" />
                    <div className="orb orb-2" />
                    <div className="orb orb-3" />
                </div>
            </motion.div>

            <motion.div className="hero-content" style={{ opacity }}>
                {/* Decorative flower SVGs */}
                <motion.div className="hero-flower hero-flower-left" variants={flowerSvgVariants} initial="hidden" animate="visible">
                    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="60" cy="40" r="18" fill="#f0a6ca" opacity="0.7" />
                        <circle cx="42" cy="55" r="18" fill="#dfc5fe" opacity="0.6" />
                        <circle cx="78" cy="55" r="18" fill="#ffd6e7" opacity="0.6" />
                        <circle cx="48" cy="75" r="18" fill="#c084fc" opacity="0.5" />
                        <circle cx="72" cy="75" r="18" fill="#f0a6ca" opacity="0.5" />
                        <circle cx="60" cy="58" r="10" fill="#fff0f5" />
                        <rect x="58" y="70" width="4" height="40" rx="2" fill="#7cb67c" opacity="0.6" />
                    </svg>
                </motion.div>
                <motion.div className="hero-flower hero-flower-right" variants={flowerSvgVariants} initial="hidden" animate="visible">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="50" cy="30" rx="14" ry="20" fill="#ffd6e7" opacity="0.7" transform="rotate(0 50 50)" />
                        <ellipse cx="50" cy="30" rx="14" ry="20" fill="#dfc5fe" opacity="0.6" transform="rotate(72 50 50)" />
                        <ellipse cx="50" cy="30" rx="14" ry="20" fill="#f0a6ca" opacity="0.6" transform="rotate(144 50 50)" />
                        <ellipse cx="50" cy="30" rx="14" ry="20" fill="#c084fc" opacity="0.5" transform="rotate(216 50 50)" />
                        <ellipse cx="50" cy="30" rx="14" ry="20" fill="#ffd9b3" opacity="0.5" transform="rotate(288 50 50)" />
                        <circle cx="50" cy="50" r="8" fill="#fff0f5" />
                    </svg>
                </motion.div>

                {/* Date badge */}
                <motion.div className="hero-date" variants={dateVariants} initial="hidden" animate="visible">
                    <span className="hero-date-number">8</span>
                    <span className="hero-date-slash">/</span>
                    <span className="hero-date-number">3</span>
                </motion.div>

                {/* Title with letter animation */}
                <h1 className="hero-title">
                    {title.split('').map((char, i) => (
                        <motion.span
                            key={i}
                            className={`hero-letter ${char === ' ' ? 'hero-space' : ''}`}
                            variants={letterVariants}
                            initial="hidden"
                            animate="visible"
                            custom={i}
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                    ))}
                </h1>

                {/* Subtitle */}
                <motion.p className="hero-subtitle" variants={subtitleVariants} initial="hidden" animate="visible">
                    Gửi tặng những đoá hoa yêu thương đến tất cả phụ nữ 💐
                </motion.p>

                {/* Scroll indicator */}
                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 1 }}
                >
                    <div className="scroll-mouse">
                        <div className="scroll-wheel" />
                    </div>
                    <span>Cuộn xuống</span>
                </motion.div>
            </motion.div>
        </section>
    );
}
