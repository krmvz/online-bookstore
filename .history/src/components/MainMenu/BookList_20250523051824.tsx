import React from 'react';
import { Book, BookStore } from '../../data/book';
import BookCard from './BookCard';

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div className="book-list">
      {books.map(book => (
        <BookCard
          key={book.id}
          book={book}
          stores={book.stores.map(s => s.store)}
        />
      ))}
    </div>
  );
};

export default BookList;