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
        {stores.map(store => {
          const availability = book.stores.find(s => s.storeId === store.id);
          return (
            <div key={store.id} className="store-price-item">
              <span className="store-name">{store.name}</span>
              {availability ? (
                <>
                  <span className="price">{availability.price} сом</span>
                  <span className={`stock-status ${availability.inStock ? 'in-stock' : 'out-of-stock'}`}>
                    {availability.inStock ? 'Бар' : 'жок'}
                  </span>
                </>
              ) : (
                <span className="stock-status out-of-stock">жок</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookCard;