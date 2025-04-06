import { NavLink } from "react-router-dom";
import "./";
import { motion } from "framer-motion";

function MainMenu() {
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
          <NavLink to="/search" className="icon-link">
            🔍
          </NavLink>
          <NavLink to="/cart" className="icon-link">
            🛒
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