import { NavLink } from "react-router-dom";
import './css/About.page.scss';

function AboutUsPage() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-title">Биз жөнүндө</h1>
        
        <section className="about-section">
          <h2>Биздин китепкана</h2>
          <p>
            Биз 2023-жылдан бери Кыргызстандагы эң ири онлайн китеп дүкөнүбүз. 
            Биздин максат - окурмандарга сапаттуу китептерди жеткиликтүү баада сунуштоо.
          </p>
        </section>

        <section className="about-section">
          <h2>Биздин миссия</h2>
          <div className="mission-points">
            <div className="mission-point">
              <span className="icon">📚</span>
              <h3>Билим берүү</h3>
              <p>Билим берүүнү жана окууну колдоо</p>
            </div>
            <div className="mission-point">
              <span className="icon">🌟</span>
              <h3>Сапат</h3>
              <p>Жогорку сапаттагы китептерди сунуштоо</p>
            </div>
            <div className="mission-point">
              <span className="icon">💰</span>
              <h3>Жеткиликтүүлүк</h3>
              <p>Ар бир адам үчүн жеткиликтүү баалар</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Биздин артыкчылыктар</h2>
          <div className="features">
            <div className="feature">
              <h3>10,000+</h3>
              <p>Китептер</p>
            </div>
            <div className="feature">
              <h3>24/7</h3>
              <p>Колдоо кызматы</p>
            </div>
            <div className="feature">
              <h3>1-3 күн</h3>
              <p>Жеткирүү</p>
            </div>
          </div>
        </section>

        <section className="about-section contact">
          <h2>Байланыш</h2>
          <div className="contact-info">
            <p>📍 Бишкек шаары, Чүй проспекти 123</p>
            <p>📞 +996 XXX XXX XXX</p>
            <p>✉️ info@bookstore.kg</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export { AboutUsPage };