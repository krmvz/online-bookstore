import { useState, useEffect } from "react";
import { Book, books } from "../data/books.data";
import { stores } from "../data/stores";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BookCard from "../components/MainMenu/BookCard";
import "./css/Home.page.scss";

function HomePage() {
  const [featuredBooks, setFeaturedBooks] = useState<Book[]>([]);
  const [newArrivals, setNewArrivals] = useState<Book[]>([]);

  useEffect(() => {
    setFeaturedBooks(books.slice(0, 4));
    setNewArrivals(books.slice(4, 8));
  }, []);

  return (
    <div className="home-page">
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <h1>Китеп дүйнөсүнө кош келиңиз</h1>
          <p>Биздин китепканадан сиз каалаган китепти таба аласыз</p>
          <Link to="/books" className="browse-button">
            Китептерди көрүү
          </Link>
        </div>
      </motion.section>

      <section className="featured-section">
        <div className="section-title">
          <h2>Сунушталган китептер</h2>
        </div>
        <div className="books-grid">
          {featuredBooks.map((book, index) => (
            <motion.div 
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <BookCard book={book} stores={stores} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="categories-section">
        <div className="section-title">
          <h2>Категориялар</h2>
        </div>
        <div className="categories-grid">
          {['Роман', 'Поэзия', 'Илимий', 'Балдар үчүн'].map((category, index) => (
            <motion.div 
              key={category}
              className="category-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3>{category}</h3>
              <Link to="/books" className="explore-link">
                Көбүрөөк →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="new-arrivals-section">
        <div className="section-title">
          <h2>Жаңы китептер</h2>
        </div>
        <div className="books-grid">
          {newArrivals.map((book, index) => (
            <motion.div 
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <BookCard book={book} stores={stores} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export { HomePage };