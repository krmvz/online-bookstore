import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import "./MainMenu.scss";
// import './css/MainMenu.scss';

export function MainMenu() {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <nav className="main_menu">
      <Link to="/">Башкы бет</Link>
      <Link to="/books">Китептер</Link>
      <Link to="/categories">Категориялар</Link>
      <Link to="/about-us">Биз жөнүндө</Link>
      <Link to="/cart" className="cart_link">
        Куржун 🛒
        {cartItems.length > 0 && <span className="cart_count">{cartItems.length}</span>}
      </Link>
      {user ? (
        <>
          <Link to="/profile">Профиль</Link>
          <button onClick={handleLogout} className="auth_btn">Чыгуу</button>
        </>
      ) : (
        <>
          <Link to="/login" className="auth_btn">Кирүү</Link>
          <Link to="/register" className="auth_btn">Катталуу</Link>
        </>
      )}
    </nav>
  );
}