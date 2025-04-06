import { motion } from 'framer-motion';
import './css/About.page.scss';

function AboutPage() {
  return (
    <div className="about-page">
      <motion.div 
        className="about-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Биз жөнүндө</h1>
        <p>Кыргызстандагы эң ири онлайн китеп дүкөнү</p>
      </motion.div>

      <div className="about-content">
        <motion.section 
          className="mission-section"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Биздин миссия</h2>
          <p>
            Биз ар бир адамга сапаттуу китептерди жеткиликтүү кылууну көздөйбүз. 
            Биздин максат - билим берүүнү жана окууну колдоо аркылуу коомго салым кошуу.
          </p>
        </motion.section>

        <motion.section 
          className="features-section"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Эмне үчүн биз?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="icon">📚</span>
              <h3>Кеңири тандоо</h3>
              <p>Миңдеген китептердин ичинен тандаңыз</p>
            </div>
            <div className="feature-card">
              <span className="icon">🚚</span>
              <h3>Тез жеткирүү</h3>
              <p>Бүткүл өлкө боюнча жеткирүү кызматы</p>
            </div>
            <div className="feature-card">
              <span className="icon">💰</span>
              <h3>Жеткиликтүү баа</h3>
              <p>Атаандаштыкка жөндөмдүү баалар</p>
            </div>
            <div className="feature-card">
              <span className="icon">🤝</span>
              <h3>Сапаттуу тейлөө</h3>
              <p>24/7 кардарларды колдоо</p>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="contact-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2>Байланыш</h2>
          <div className="contact-info">
            <p>📍 Бишкек шаары, Чүй проспекти 123</p>
            <p>📞 +996 XXX XXX XXX</p>
            <p>✉️ info@bookstore.kg</p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export { AboutPage };