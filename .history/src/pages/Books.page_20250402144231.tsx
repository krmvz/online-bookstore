import { NavLink } from "react-router";
import { books } from "../data/books.data";
// import { MainMenu } from "../menu/main.menu";

function UsersPage() {
  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <NavLink to={`/users/${book.id}`}>
             {book.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { UsersPage };
