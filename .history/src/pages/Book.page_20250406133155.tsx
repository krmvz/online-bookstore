import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Book, books } from "../data/books.data";
import { useCart } from "../context/CartContext";
import './css/Book.page.scss';

function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<'physical' | 'ebook' | 'audio'>('physical');
  const { addToCart } = useCart();

  useEffect(() => {
    const foundBook = books.find((item) => item.id === id);
    setBook(foundBook || null);
  }, [id]);

  const handleAddToCart = () => {
    if (book) {
      const bookWithSelectedPrice = {
        ...book,
        price: selectedFormat === 'physical' ? book.price 
             : selectedFormat === 'ebook' ? book.e_price 
             : book.audio_price
      };
      addToCart(bookWithSelectedPrice);
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
          <div className="book-metadata">
            <p><strong>Басмакана:</strong> {book.publisher}</p>
            <p><strong>Басылган жылы:</strong> {book.publication_year}</p>
            <p><strong>Беттердин саны:</strong> {book.number_of_pages}</p>
            <p><strong>ISBN:</strong> {book.ISBN}</p>
          </div>
          <p className="description">{book.short_info_about_book}</p>
          
          <div className="format-selection">
            <button 
              className={`format-btn ${selectedFormat === 'physical' ? 'active' : ''}`}
              onClick={() => setSelectedFormat('physical')}
            >
              Китеп ({book.price} сом)
            </button>
            <button 
              className={`format-btn ${selectedFormat === 'ebook' ? 'active' : ''}`}
              onClick={() => setSelectedFormat('ebook')}
            >
              Электрондук ({book.e_price} сом)
            </button>
            <button 
              className={`format-btn ${selectedFormat === 'audio' ? 'active' : ''}`}
              onClick={() => setSelectedFormat('audio')}
            >
              Аудио ({book.audio_price} сом)
            </button>
          </div>

          <div className="price-section">
            <p className="price">
              {selectedFormat === 'physical' ? book.price 
               : selectedFormat === 'ebook' ? book.e_price 
               : book.audio_price} сом
            </p>
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