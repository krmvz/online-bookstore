import { useState } from 'react';
import { books } from '../data/books.data';
import './css/Categories.page.scss';

function CategoriesPage() {
  const categories = [...new Set(books.map(book => book.category))];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredBooks = selectedCategory 
    ? books.filter(book => book.category === selectedCategory)
    : [];

  return (
    <div className="categories-page">
      <h1 className="page-title">Категориялар</h1>
      
      <div className="categories-grid">
        {categories.map(category => (
          <button 
            key={category}
            className={`category-card ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="books-section">
          <h2>{selectedCategory}</h2>
          <div className="books-grid">
            {filteredBooks.map(book => (
              <div key={book.id} className="book-card">
                <img src={book.image} alt={book.name} />
                <h3>{book.name}</h3>
                <p className="author">{book.author}</p>
                <p className="price">{book.price} сом</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export { CategoriesPage };