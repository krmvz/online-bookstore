import React from 'react';
import { Book, BookStore } from '../../data/book';

interface BookCardProps {
  book: Book;
  stores: BookStore[];
}

const BookCard: React.FC<BookCardProps> = ({ book, stores }) => {
  return (
    <div className="book-card">
      <div className="book-image">
        <img src={book.imageUrl} alt={book.title} />
      </div>
      <div className="book-info">
        <h3>{book.title}</h3>
        <p className="author">{book.author}</p>
        <p className="category">{book.category}</p>
      </div>
      <div className="store-prices">
        <h4>Дүкөндөрдө бар:</h4>
        {book.stores.map(storeInfo => (
          <div key={storeInfo.store.id} className="store-price-item">
            <span className="store-name">{storeInfo.store.name}</span>
            <span className="price">{storeInfo.price} сом</span>
            <span className={`stock-status ${storeInfo.inStock ? 'in-stock' : 'out-of-stock'}`}>
              {storeInfo.inStock ? `Бар${storeInfo.quantity ? ` (${storeInfo.quantity} даана)` : ''}` : 'Жок'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCard;