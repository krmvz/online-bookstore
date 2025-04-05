import { NavLink } from "react-router";
import { books } from "../data/books.data";
// import { MainMenu } from "../menu/main.menu";

function UsersPage() {
  return (
    <div>
      <h1>Books</h1>
      <ul>
        {bs.map((book) => (
          <li key={user.id}>
            <NavLink to={`/users/${user.id}`}>
             {user.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { UsersPage };
