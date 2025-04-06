import { useState } from "react";
import { books } from "../data/books.data";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import './css/Books.page.scss';

function BooksPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useCart();

  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (book: typeof books[0]) => {
    addToCart(book);
    alert(`${book.name} себетке кошулду!`);
  };

  return (
    <div className="books_page">
      <h1 className="page_title">Китептер</h1>
      
      <div className="search_area">
        <input
          type="text"
          className="search_input"
          placeholder="Китеп же автор боюнча издөө..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="books_list">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book_card">
            <Link to={`/books/${book.id}`}>
              <img className="book_image" src={book.image} alt={book.name} />
              <h3 className="book_title">{book.name}</h3>
            </Link>
            <p className="book_author">{book.author}</p>
            <p className="book_price">{book.price} сом</p>
            <button 
              className="add_to_basket_btn"
              onClick={() => handleAddToCart(book)}
            >
              Куржунга кошуу 🛒
            </button>
          </div>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <p className="no_results">Китеп табылган жок</p>
      )}
    </div>
  );
}

export { BooksPage };