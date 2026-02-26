import { motion } from 'framer-motion';
import './Quotes.css';

const quotes = [
    {
        text: 'Phụ nữ là nửa kia của thế giới, nhưng lại là toàn bộ tình yêu của thế giới.',
        author: 'Khuyết danh',
        emoji: '🌸',
    },
    {
        text: 'A woman is like a tea bag — you never know how strong she is until she gets in hot water.',
        author: 'Eleanor Roosevelt',
        emoji: '☕',
    },
    {
        text: 'Có một nơi đặc biệt trong lịch sử dành cho những người phụ nữ dám đứng lên vì bản thân mình.',
        author: 'Khuyết danh',
        emoji: '✨',
    },
    {
        text: 'The most courageous act is still to think for yourself. Aloud.',
        author: 'Coco Chanel',
        emoji: '💫',
    },
    {
        text: 'Đằng sau mỗi người phụ nữ thành công là chính cô ấy — với sự kiên cường và tình yêu thương vô bờ bến.',
        author: 'Khuyết danh',
        emoji: '💪',
    },
    {
        text: 'She believed she could, so she did.',
        author: 'R.S. Grey',
        emoji: '🌷',
    },
];

const quoteVariants = {
    hidden: (i) => ({
        opacity: 0,
        x: i % 2 === 0 ? -60 : 60,
        y: 20,
    }),
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function Quotes() {
    return (
        <section className="quotes" id="quotes">
            <div className="section-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    Những Lời Hay Ý Đẹp
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    Trích dẫn truyền cảm hứng về sức mạnh và vẻ đẹp phụ nữ
                </motion.p>

                <div className="quotes-list">
                    {quotes.map((quote, i) => (
                        <motion.blockquote
                            key={i}
                            className="quote-item glass-card"
                            variants={quoteVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={i}
                        >
                            <span className="quote-emoji">{quote.emoji}</span>
                            <div className="quote-mark">"</div>
                            <p className="quote-text">{quote.text}</p>
                            <footer className="quote-author">— {quote.author}</footer>
                        </motion.blockquote>
                    ))}
                </div>
            </div>
        </section>
    );
}
