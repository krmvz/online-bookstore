import { useState } from "react";
import { books } from "../data/books.data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import './css/Ebooks.page.scss';

interface Book {
  id: string;
  name: string;
  author: string;
  e_price: number;
  image: string;
  category: string;
  fileSize?: string;
  format?: string;
  language?: string;
}

function EbooksPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const [downloadingBookId, setDownloadingBookId] = useState<string | null>(null);

  const booksPerPage = 12;
  const categories = ["all", ...new Set(books.filter(book => book.e_price > 0).map(book => book.category))];

  const handleDownload = async (book: Book) => {
    setDownloadingBookId(book.id);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const link = document.createElement('a');
      link.href = book.image; // Replace with actual ebook file URL
      link.download = `${book.name}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } finally {
      setTimeout(() => setDownloadingBookId(null), 1000);
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
    <motion.div 
      className="ebooks-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
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

      <motion.div 
        className="ebooks-grid"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {currentBooks.map((book) => (
          <motion.div 
            key={book.id} 
            className="ebook-card"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
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
                className={`download-btn ${downloadingBookId === book.id ? 'loading' : ''}`}
                onClick={() => handleDownload(book)}
                disabled={downloadingBookId === book.id}
              >
                {downloadingBookId === book.id ? 'Жүктөлүүдө...' : 'Жүктөп алуу 📥'}
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredBooks.length === 0 ? (
        <motion.p 
          className="no-results"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Китеп табылган жок
        </motion.p>
      ) : (
        <motion.div 
          className="pagination"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i + 1}
              className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}

export { EbooksPage };