import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Book, books } from "../data/books.data";
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

  const handleAddToCart = async () => {
    if (!book) return;
    
    await addToCart({
      bookId: book.id,
      title: book.name, // Changed from book.title to book.name
      price: book.price,
      quantity: 1,
      imageUrl: book.image // Changed from book.imageUrl to book.image
    });
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
          <div className="book-metadata">
            <p><strong>Басмакана:</strong> {book.publisher}</p>
            <p><strong>Басылган жылы:</strong> {book.publication_year}</p>
            <p><strong>Беттердин саны:</strong> {book.number_of_pages}</p>
            <p><strong>Форматы:</strong> {book.format}</p>
            <p><strong>Мукабасы:</strong> {book.binding}</p>
            <p><strong>ISBN:</strong> {book.ISBN}</p>
            <p><strong>Тили:</strong> {book.language}</p>
          </div>
          <p className="description">{book.short_info_about_book}</p>
          <div className="price-section">
            <div className="prices">
              <p className="price">Китеп: {book.price} сом</p>
              <p className="e-price">Электрондук: {book.e_price} сом</p>
              <p className="audio-price">Аудио: {book.audio_price} сом</p>
            </div>
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