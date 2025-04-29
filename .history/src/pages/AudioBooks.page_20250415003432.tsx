import { useState } from "react";
import { books } from "../data/books.data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import './css/AudioBooks.page.scss';

interface AudioBook {
  id: string;
  name: string;
  author: string;
  a_price: number;
  image: string;
  category: string;
  duration?: string;
  format?: string;
  language?: string;
}

function AudioBooksPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const [playingBookId, setPlayingBookId] = useState<string | null>(null);

  const booksPerPage = 12;
  const categories = ["all", ...new Set(books.filter(book => book.a_price > 0).map(book => book.category))];

  const handlePlay = async (book: AudioBook) => {
    setPlayingBookId(book.id);
    try {
      // Here you would implement audio playback logic
      await new Promise(resolve => setTimeout(resolve, 1000));
    } finally {
      setTimeout(() => setPlayingBookId(null), 1000);
    }
  };

  const filteredBooks = books
    .filter(book => book.a_price > 0)
    .filter((book) => (
      (selectedCategory === "all" || book.category === selectedCategory) &&
      (book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       book.author.toLowerCase().includes(searchTerm.toLowerCase()))
    ))
    .sort((a, b) => {
      if (sortBy === "price") return a.a_price - b.a_price;
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
      className="audiobooks_page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="page_title">Аудио китептер</h1>
      
      <div className="filters">
        <div className="search_area">
          <input
            type="text"
            className="search_input"
            placeholder="Китеп же автор боюнча издөө..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter_controls">
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
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
          >
            <option value="name">Аты боюнча</option>
            <option value="price">Баасы боюнча</option>
            <option value="author">Автор боюнча</option>
          </select>
        </div>
      </div>

      <div className="audiobooks_list">
        {currentBooks.map((book) => (
          <motion.div 
            key={book.id} 
            className="audiobook_card"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Link to={`/books/${book.id}`} className="book_link">
              <img src={book.image} alt={book.name} className="book_image" />
              <div className="book_info">
                <h3 className="book_title">{book.name}</h3>
                <p className="book_author">{book.author}</p>
                <p className="book_duration">{book.duration || "1 саат 30 мүнөт"}</p>
              </div>
            </Link>
            <p className="book_price">{book.a_price} сом</p>
            <button 
              className={`play_btn ${playingBookId === book.id ? 'loading' : ''}`}
              onClick={() => handlePlay(book)}
              disabled={playingBookId === book.id}
            >
              {playingBookId === book.id ? 'Жүктөлүүдө...' : 'Угуу ▶'}
            </button>
          </motion.div>
        ))}
      </div>

      {filteredBooks.length === 0 ? (
        <p className="no_results">Китеп табылган жок</p>
      ) : (
        <div className="pagination">
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i + 1}
              className={`page_btn ${currentPage === i + 1 ? 'active' : ''}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export { AudioBooksPage };