import './css/About.page.scss';
import { motion } from 'framer-motion';

function AboutUsPage() {
  return (
    <div className="about-page">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="about-container"
      >
        <motion.h1 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="about-title"
        >
          Биз жөнүндө
        </motion.h1>
        
        <motion.section 
          className="hero-section"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
        >
          <div className="hero-content">
            <h2>Биздин китепкана</h2>
            <p>
              Биз 2023-жылдан бери Кыргызстандагы эң ири онлайн китеп дүкөнүбүз. 
              Биздин максат - окурмандарга сапаттуу китептерди жеткиликтүү баада сунуштоо.
            </p>
          </div>
        </motion.section>

        <section className="mission-section">
          <h2>Биздин миссия</h2>
          <div className="mission-grid">
            <motion.div 
              className="mission-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="icon-wrapper">📚</div>
              <h3>Билим берүү</h3>
              <p>Билим берүүнү жана окууну колдоо</p>
            </motion.div>
            <motion.div 
              className="mission-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="icon-wrapper">🌟</div>
              <h3>Сапат</h3>
              <p>Жогорку сапаттагы китептерди сунуштоо</p>
            </motion.div>
            <motion.div 
              className="mission-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="icon-wrapper">💰</div>
              <h3>Жеткиликтүүлүк</h3>
              <p>Ар бир адам үчүн жеткиликтүү баалар</p>
            </motion.div>
          </div>
        </section>

        <section className="stats-section">
          <div className="stats-container">
            <motion.div 
              className="stat-card"
              whileHover={{ y: -10 }}
            >
              <span className="stat-number">10,000+</span>
              <span className="stat-label">Китептер</span>
            </motion.div>
            <motion.div 
              className="stat-card"
              whileHover={{ y: -10 }}
            >
              <span className="stat-number">24/7</span>
              <span className="stat-label">Колдоо кызматы</span>
            </motion.div>
            <motion.div 
              className="stat-card"
              whileHover={{ y: -10 }}
            >
              <span className="stat-number">1-3 күн</span>
              <span className="stat-label">Жеткирүү</span>
            </motion.div>
          </div>
        </section>

        <section className="contact-section">
          <h2>Байланыш</h2>
          <div className="contact-cards">
            <motion.div 
              className="contact-card"
              whileHover={{ scale: 1.02 }}
            >
              <div className="contact-icon">📍</div>
              <p>Бишкек шаары, Чүй проспекти 123</p>
            </motion.div>
            <motion.div 
              className="contact-card"
              whileHover={{ scale: 1.02 }}
            >
              <div className="contact-icon">📞</div>
              <p>+996 XXX XXX XXX</p>
            </motion.div>
            <motion.div 
              className="contact-card"
              whileHover={{ scale: 1.02 }}
            >
              <div className="contact-icon">✉️</div>
              <p>info@bookstore.kg</p>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

export { AboutUsPage };