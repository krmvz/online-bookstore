import { NavLink } from "react-router";
import { books } from "../data/books.data";
import './css/Books.page.scss'
// import { MainMenu } from "../menu/main.menu";

function UsersPage() {
  return (
    <div className="books_page">
      <h1 className="page_title">Available Books</h1>
      
      {/* Search Input */}
      <input
        type="text"
        className="search_input"
        placeholder="Search for a book..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Books Grid */}
      <div className="books_list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book_card">
              <NavLink to={`/books/${book.id}`} className="book_link">
                <img src={book.image} alt={book.name} className="book_image" />
                <h2 className="book_title">{book.name}</h2>
              </NavLink>
              <p className="book_price">{book.price} сом</p>
              <button className="add_to_basket_btn">Add to Basket</button>
            </div>
          ))
        ) : (
          <p className="no_results">No books found</p>
        )}
      </div>
    </div>
  );
}

export { UsersPage };
