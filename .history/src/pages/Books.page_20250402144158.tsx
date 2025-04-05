import { NavLink } from "react-router";
import { s } from "../data/books.data";
// import { MainMenu } from "../menu/main.menu";

function UsersPage() {
  return (
    <div>
      <h1>Books</h1>
      <ul>
        {users.map((book) => (
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
