import { NavLink } from "react-router";
import { MainMenu } from "../menu/main.menu";

function AboutUsPage() {
  return (
    <div>
      <a href="/">Вернуться на главную</a> <br />
      <NavLink to="/">Вернуться на главную (react-router)</NavLink>

      <h1>About Us</h1>
      <p>Our company is the best in the world.</p>
    </div>
  );
}

export { AboutUsPage };
