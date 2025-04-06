import { useState } from 'react';
import { books } from '../data/books.data';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './css/Categories.page.scss';

function CategoriesPage() {
  const categories = [...new Set(books.map(book => book.category))];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { addToCart } = useCart();

  const filteredBooks = selectedCategory 
    ? books.filter(book => book.category === selectedCategory)
    : [];

  const handleAddToCart = (book: typeof books[0]) => {
    addToCart(book);
    alert(`${book.name} себетке кошулду!`);
  };

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
                <Link to={`/books/${book.id}`}>
                  <img src={book.image} alt={book.name} className="book-image" />
                  <h3>{book.name}</h3>
                </Link>
                <p className="author">{book.author}</p>
                <p className="price">{book.price} сом</p>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(book)}
                >
                  Куржунга кошуу 🛒
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export { CategoriesPage };