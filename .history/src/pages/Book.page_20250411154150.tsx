import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Book, books } from "../data/books.data";
import { useCart } from "../context/CartContext";
import './css/Book.page.scss';

function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<'print' | 'ebook' | 'audio'>('print');
  const { addToCart } = useCart();

  useEffect(() => {
    const foundBook = books.find((item) => item.id === id);
    setBook(foundBook || null);
  }, [id]);

  const handleAddToCart = async () => {
    if (!book) return;
    
    const price = selectedFormat === 'ebook' 
      ? book.e_price 
      : selectedFormat === 'audio' 
        ? book.audio_price 
        : book.price;

    await addToCart({
      bookId: book.id,
      title: book.name,
      price: price,
      quantity: 1,
      imageUrl: book.image,
      // format: selectedFormat
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

          <div className="format-toggles">
            <button 
              className={`format-btn ${selectedFormat === 'print' ? 'active' : ''}`}
              onClick={() => setSelectedFormat('print')}
            >
              Басма китеп
            </button>
            {book.e_price > 0 && (
              <button 
                className={`format-btn ${selectedFormat === 'ebook' ? 'active' : ''}`}
                onClick={() => setSelectedFormat('ebook')}
              >
                Э. китеп
              </button>
            )}
            {book.audio_price > 0 && (
              <button 
                className={`format-btn ${selectedFormat === 'audio' ? 'active' : ''}`}
                onClick={() => setSelectedFormat('audio')}
              >
                Аудио
              </button>
            )}
          </div>

          <div className="price-section">
            <p className="price">
              {selectedFormat === 'ebook' 
                ? book.e_price 
                : selectedFormat === 'audio' 
                  ? book.audio_price 
                  : book.price} сом
            </p>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              {selectedFormat === 'print' ? 'Куржунга кошуу' : 'Жүктөө'} 🛒
            </button>
          </div>

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
        </div>
      </div>
    </div>
  );
}

export { BookPage };