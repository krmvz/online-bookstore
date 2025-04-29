import { useState } from "react";
import { books } from "../data/books.data";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import './css/Ebooks.page.scss';

function EbooksPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const [purchasingBookId, setPurchasingBookId] = useState<string | null>(null);
  const { addToCart } = useCart();

  const booksPerPage = 12;
  const categories = ["all", ...new Set(books.filter(book => book.e_price > 0).map(book => book.category))];

  const handlePurchase = async (book: any) => {
    setPurchasingBookId(book.id);
    try {
      await addToCart({
        bookId: book.id,
        title: book.name,
        price: book.e_price,
        quantity: 1,
        imageUrl: book.image,
        format: 'ebook'
      });
    } finally {
      setTimeout(() => setPurchasingBookId(null), 1000);
    }
  };

  const filteredBooks = books
    .filter(book => book.e_price > 0)
    .filter((book) => (
      (selectedCategory === "all" || book.category === selectedCategory) &&
      (book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       book.author.toLowerCase().includes(searchTerm.toLowerCase()))
    ))
    .sort((a, b) => {
      if (sortBy === "price") return a.e_price - b.e_price;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "author") return a.author.localeCompare(b.author);
      return 0;
    });

  const pageCount = Math.ceil(filteredBooks.length / booksPerPage);
  const currentBooks = filteredBooks.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );

  return (
    <div className="ebooks-page">
      <h1 className="page-title">Электрондук китептер</h1>
      
      <div className="filters">
        <div className="search-area">
          <input
            type="text"
            className="search-input"
            placeholder="Китеп же автор боюнча издөө..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-controls">
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === "all" ? "Бардык категориялар" : category}
              </option>
            ))}
          </select>

          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="name">Аты боюнча</option>
            <option value="price">Баасы боюнча</option>
            <option value="author">Автор боюнча</option>
          </select>
        </div>
      </div>

      <div className="ebooks-grid">
        {currentBooks.map((book) => (
          <div key={book.id} className="ebook-card">
            <Link to={`/books/${book.id}`} className="book-link">
              <img src={book.image} alt={book.name} className="book-image" />
              <div className="ebook-info">
                <h3 className="book-title">{book.name}</h3>
                <p className="book-author">{book.author}</p>
              </div>
            </Link>
            <div className="purchase-section">
              <p className="price">{book.e_price} сом</p>
              <button 
                className={`purchase-btn ${purchasingBookId === book.id ? 'loading' : ''}`}
                onClick={() => handlePurchase(book)}
                disabled={purchasingBookId === book.id}
              >
                {purchasingBookId === book.id ? 'Кошулду ✓' : 'Сатып алуу 🛒'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredBooks.length === 0 ? (
        <p className="no-results">Китеп табылган жок</p>
      ) : (
        <div className="pagination">
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i + 1}
              className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export { EbooksPage };