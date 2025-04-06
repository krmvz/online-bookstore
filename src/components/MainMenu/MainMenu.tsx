import { NavLink } from "react-router-dom";
import "./MainMenu.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import { books } from "../../data/books.data";
import { useCart } from "../../context/CartContext";

function MainMenu() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const { items } = useCart();

  const searchResults = books.filter(book => 
    book.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);

  const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <motion.header 
      className="main-menu"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="menu-container">
        <div className="logo">
          <NavLink to="/">
            📚 Book Store
          </NavLink>
        </div>

        <nav className="nav-links">
          <NavLink to="/" className="menu-link">
            Башкы бет
          </NavLink>
          <NavLink to="/books" className="menu-link">
            Китептер
          </NavLink>
          <NavLink to="/categories" className="menu-link">
            Категориялар
          </NavLink>
          <NavLink to="/about-us" className="menu-link">
            Биз жөнүндө
          </NavLink>
        </nav>

        <div className="nav-actions">
          <div className="search-container">
            <input
              type="text"
              placeholder="Китеп издөө..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowResults(true)}
              onBlur={() => setTimeout(() => setShowResults(false), 200)}
            />
            {showResults && searchQuery && (
              <div className="search-results">
                {searchResults.length > 0 ? (
                  searchResults.map(book => (
                    <NavLink 
                      key={book.id} 
                      to={`/books/${book.id}`}
                      className="search-result-item"
                    >
                      <img src={book.image} alt={book.name} />
                      <div>
                        <h4>{book.name}</h4>
                        <p>{book.author}</p>
                      </div>
                    </NavLink>
                  ))
                ) : (
                  <div className="no-results">Китеп табылган жок</div>
                )}
              </div>
            )}
          </div>
          <NavLink to="/cart" className="icon-link cart-link">
            🛒
            {cartItemsCount > 0 && (
              <span className="cart-counter">{cartItemsCount}</span>
            )}
          </NavLink>
          <NavLink to="/profile" className="icon-link">
            👤
          </NavLink>
        </div>
      </div>
    </motion.header>
  );
}

export { MainMenu };