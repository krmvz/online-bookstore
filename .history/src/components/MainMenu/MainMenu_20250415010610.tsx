import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import {  AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import "./MainMenu.scss";

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
      <Link to="/"> Башкы бет</Link>
      <Link to="/books"> Китептер</Link>
      <Link to="/audiobooks"> Аудио китептер</Link>
      <Link to="/ebooks"> Электрондук китептер</Link>
      <Link to="/gifts"> Белектер</Link>
      <Link to="/about-us"> Биз жөнүндө</Link>
      <Link to="/cart" className="cart_link">
        <AiOutlineShoppingCart />
        {cartItems.length > 0 && <span className="cart_count">{cartItems.length}</span>}
      </Link>
      {user ? (
        <>
          <Link to="/profile" title="Профиль"><FaUserCircle /></Link>
          <button onClick={handleLogout} className="auth_btn" title="Чыгуу"><FiLogOut /></button>
        </>
      ) : (
        <>
          <Link to="/login" className="auth_btn"><FiLogIn /></Link>
          <Link to="/register" className="auth_btn"><FaUserCircle /> Катталуу</Link>
        </>
      )}
    </nav>
  );
}