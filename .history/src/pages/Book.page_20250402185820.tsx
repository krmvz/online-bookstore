import { useState } from "react";
import { NavLink } from "react-router-dom";
import { books } from "../data/books.data";

function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [comments, setComments] = useState<{ [key: number]: string[] }>({});

  // Search function
  const handleSearch = () => {
    const filtered = books.filter(
      (book) =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  // Add comment function
  const addComment = (bookId: number, comment: string) => {
    if (!comment.trim()) return;
    setComments((prev) => ({
      ...prev,
      [bookId]: [...(prev[bookId] || []), comment],
    }));
  };

  return (
    <div className="books_page">
      <h1 className="page_title">Available Books</h1>

      {/* Search Bar */}
      <div className="search_area">
        <input
          type="text"
          className="search_input"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search_btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Books Grid */}
      <div className="books_list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book_card">
              <NavLink to={`/books/${book.id}`} className="book_link">
                <img src={book.image} alt={book.name} className="book_image" />
                <h2 className="book_title">{book.name}</h2>
              </NavLink>
              <p className="book_author">{book.author}</p>
              <p className="book_price">{book.price} сом</p>
              <button className="add_to_basket_btn">Add to Basket</button>

              {/* Comment Section */}
              <div className="comment_section">
                <h3 className="comment_title">Comments</h3>
                <ul className="comment_list">
                  {(comments[book.id] || []).map((comment, index) => (
                    <li key={index} className="comment_item">
                      {comment}
                    </li>
                  ))}
                </ul>
                <textarea
                  className="comment_input"
                  placeholder="Write a comment..."
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      addComment(book.id, e.currentTarget.value);
                      e.currentTarget.value = "";
                    }
                  }}
                />
              </div>
            </div>
          ))
        ) : (
          <p className="no_results">No books found</p>
        )}
      </div>
    </div>
  );
}

export { UsersPage };
