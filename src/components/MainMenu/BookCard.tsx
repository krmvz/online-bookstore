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
        <h4>Available at:</h4>
        {book.availability.map(store => {
          const storeInfo = stores.find(s => s.id === store.storeId);
          return (
            <div key={store.storeId} className="store-price-item">
              <span className="store-name">{storeInfo?.name}</span>
              <span className="price">{store.price} сом</span>
              <span className={`stock-status ${store.inStock ? 'in-stock' : 'out-of-stock'}`}>
                {store.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookCard;