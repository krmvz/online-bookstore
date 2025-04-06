import { useState, useEffect } from "react";
import { Book, books } from "../data/books.data";
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
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>Китеп дүйнөсүнө кош келиңиз</h1>
          <p>Биздин китепканадан сиз каалаган китепти таба аласыз</p>
        </motion.div>
      </section>

      {/* Featured Books */}
      <section className="featured-section">
        <h2>Сунушталган китептер</h2>
        <div className="books-grid">
          {featuredBooks.map((book) => (
            <motion.div 
              key={book.id}
              className="book-card"
              whileHover={{ scale: 1.05 }}
            >
              <img src={book.image} alt={book.name} />
              <h3>{book.name}</h3>
              <p className="author">{book.author}</p>
              <p className="price">{book.price} сом</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="new-arrivals-section">
        <h2>Жаңы китептер</h2>
        <div className="books-grid">
          {newArrivals.map((book) => (
            <motion.div 
              key={book.id}
              className="book-card"
              whileHover={{ scale: 1.05 }}
            >
              <img src={book.image} alt={book.name} />
              <h3>{book.name}</h3>
              <p className="author">{book.author}</p>
              <p className="price">{book.price} сом</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Категориялар</h2>
        <div className="categories-grid">
          {['Роман', 'Поэзия', 'Илимий', 'Балдар үчүн'].map((category) => (
            <motion.div 
              key={category}
              className="category-card"
              whileHover={{ scale: 1.05 }}
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