import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { User as Book, books } from "../data/books.data";
import { useCart } from "../context/CartContext";
import './css/Book.page.scss';

function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const foundBook = books.find((item) => item.id === id);
    setBook(foundBook || null);
  }, [id]);

  const handleAddToCart = () => {
    if (book) {
      addToCart(book);
      alert(`${book.name} себетке кошулду!`);
    }
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-details">
      <div className="book-container">
        <div className="book-image">
          <img src={book.image} alt={book.name} />
        </div>
        <div className="book-info">
          <h1>{book.name}</h1>
          <p className="author">{book.author}</p>
          <p className="category">{book.category}</p>
          <p className="description">{book.description}</p>
          <div className="price-section">
            <p className="price">{book.price} сом</p>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Куржунга кошуу 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { BookPage };