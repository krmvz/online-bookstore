import { NavLink } from "react-router-dom";
import "./MainMenu.css";

function MainMenu() {
  return (
    <header className="main-menu fixed-top">
      <nav>
        <NavLink to="/" className="menu-link">Главная</NavLink>
        <NavLink to="/about-us" className="menu-link">Биз жөнүндө</NavLink>
        <NavLink to="/users" className="menu-link">Пользователи</NavLink>
        <NavLink to="/requests" className="menu-link">Заявки на кредит</NavLink>
        <NavLink to="/old-requests" className="menu-link">Старые заявки</NavLink>
      </nav>
    </header>
  );
}

export { MainMenu };
