import { useState, useEffect } from "react";
import { Book, books } from "../data/books.data";
import { Link } from "react-router-dom";
import "./css/Home.page.scss";
import { motion } from "framer-motion";

function HomePage() {
  const [featuredBooks, setFeaturedBooks] = useState<Book[]>([]);
  const [newArrivals, setNewArrivals] = useState<Book[]>([]);

  useEffect(() => {
    setFeaturedBooks(books.slice(0, 4));
    setNewArrivals(books.slice(4, 8));
  }, []);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Китеп дүйнөсүнө кош келиңиз
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Биздин китепканадан сиз каалаган китепти таба аласыз
          </motion.p>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-title">
          <h2>Сунушталган китептер</h2>
        </div>
        <div className="books-grid">
          {featuredBooks.map((book) => (
            <Link to={`/books/${book.id}`} key={book.id}>
              <motion.div 
                className="book-card"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="book-image">
                  <img src={book.image} alt={book.name} />
                </div>
                <div className="book-info">
                  <h3>{book.name}</h3>
                  <p className="author">{book.author}</p>
                  <p className="price">{book.price} сом</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      <section className="new-arrivals-section">
        <div className="section-title">
          <h2>Жаңы китептер</h2>
        </div>
        <div className="books-grid">
          {newArrivals.map((book) => (
            <Link to={`/books/${book.id}`} key={book.id}>
              <motion.div 
                className="book-card"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="book-image">
                  <img src={book.image} alt={book.name} />
                </div>
                <div className="book-info">
                  <h3>{book.name}</h3>
                  <p className="author">{book.author}</p>
                  <p className="price">{book.price} сом</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      <section className="categories-section">
        <div className="section-title">
          <h2>Категориялар</h2>
        </div>
        <div className="categories-grid">
          {['Роман', 'Поэзия', 'Илимий', 'Балдар үчүн'].map((category) => (
            <motion.div 
              key={category}
              className="category-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>{category}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export { HomePage };