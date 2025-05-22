import React from 'react';
import { Book } from '../../data/book';
import { stores } from '../../data/book';

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div className="book-list">
      {books.map(book => (
        <div key={book.id} className="book-card">
          <img src={book.imageUrl} alt={book.title} />
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <div className="store-availability">
            {book.availability.map(store => {
              const storeInfo = stores.find(s => s.id === store.storeId);
              return (
                <div key={store.storeId} className="store-price">
                  <span>{storeInfo?.name}: </span>
                  <span>{store.price} сом</span>
                  <span>{store.inStock ? 'In Stock' : 'Out of Stock'}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;