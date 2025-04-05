import { NavLink } from "react-router";
import { books } from "../data/books.data";
import ''
// import { MainMenu } from "../menu/main.menu";

function UsersPage() {
  return (
    <div className="books-page">
      <h1 className="page-title">Available Books</h1>
      <div className="books-list">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <NavLink to={`/books/${book.id}`} className="book-link">
              <img src={book.image} alt={book.name} className="book-image" />
              <h2 className="book-title">{book.name}</h2>
            </NavLink>
            <p className="book-price">{book.price} сом</p>
            <button className="add-to-basket-btn">Add to Basket</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export { UsersPage };
