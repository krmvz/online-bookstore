import { NavLink } from "react-router";
import { users } from "../data/books.data";
// import { MainMenu } from "../menu/main.menu";

function UsersPage() {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <NavLink to={`/users/${user.id}`}>
             {user.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { UsersPage };
