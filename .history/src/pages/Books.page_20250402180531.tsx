import { NavLink } from "react-router";
import { books } from "../data/books.data";
// import { MainMenu } from "../menu/main.menu";

function UsersPage() {
  return (
    <div className="books-page">
      <h1 className="page-title">Available Books</h1>
      <div className="books-list">
        {books.map((book) => (
          <NavLink to={`/books/${book.id}`} key={book.id} className="book-card">
            <img src={book.image} alt={book.name} className="book-image" />
            <div className="book-info">
              <h2 className="book-title">{book.name}</h2>
              <p className="book-author">{book.author}</p>
              <p className="book-price">{book.price} сом</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export { UsersPage };
