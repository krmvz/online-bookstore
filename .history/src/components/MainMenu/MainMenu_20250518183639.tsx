import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { BiBookOpen } from "react-icons/bi";
import "./MainMenu.scss";

export function MainMenu() {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/book-comparison?search=${encodeURIComponent(searchQuery)}`);
    }
  };


  return (
    <nav className="main_menu">
      {/* Logo and Home */}
      <Link to="/" className="logo">
        <BiBookOpen className="logo-icon" />
      </Link>

      {/* Search Bar */}
      <form className="search-container" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Китеп издөө..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          <AiOutlineSearch />
        </button>
      </form>

      {/* Main Navigation */}
      <div className="nav-links">
        <div className="dropdown">
          <Link to="/books" className="dropdown-trigger">Китептер</Link>
          <div className="dropdown-content">
            <Link to="/books/category/fiction">Көркөм адабият</Link>
            <Link to="/books/category/education">Окуу китептери</Link>
            <Link to="/books/category/children">Балдар үчүн</Link>
            <Link to="/books/category/religious">Диний китептер</Link>
          </div>
        </div>
        <Link to="/book-comparison">Баа салыштыруу</Link>
        <Link to="/stores">Дүкөндөр</Link>
      </div>

      {/* User Navigation */}
      <div className="user-nav">
        <Link to="/cart" className="cart_link">
          <AiOutlineShoppingCart />
          {cartItems.length > 0 && <span className="cart_count">{cartItems.length}</span>}
        </Link>
        {user ? (
          <div className="user-menu">
            <Link to="/profile" title="Профиль"></Link>
            <button onClick={handleLogout} className="auth_btn" title="Чыгуу"><FiLogOut /></button>
          </div>
        ) : (
          <div className="auth-buttons">
            <Link to="/login" className="auth_btn"><FiLogIn /></Link>
            <Link to="/register" className="auth_btn"> Катталуу</Link>
          </div>
        )}
      </div>
    </nav>
  );
}