import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { User, books } from "../data/books.data";
import './css/Book.page.scss'
// import { MainMenu } from "../menu/main.menu";

function UserPage() {
  const { id } = useParams();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const findedUser = books.find((item) => item.id === id);

    setUser(findedUser || null);
  }, [id]);

  const handleAddToBasket = () => {
    alert(`${user?.name} has been added to your basket!`);
    // Add basket functionality logic here
  };

  return  (
    <div className="user-page">
      <h1 className="title">Book Details</h1>
      {user ? (
        <div className="book-card">
          <div className="book-header">
            <img className="book-image" src={user.image} alt={user.name} />
            <div className="book-info">
              <h2 className="book-name">{user.name}</h2>
              <p className="book-author">By {user.author}</p>
              <p className="book-price">Price: {user.price} сом</p>
              <p className="book-category">Category: {user.category}</p>
              <button className="add-to-basket-btn" onClick={handleAddToBasket}>
                Add to Basket
              </button>
            </div>
          </div>

          <div className="book-details">
            <p className="book-description">{user.short_info_about_book}</p>
            <div className="book-meta">
              <p><strong>Publisher:</strong> {user.publisher}</p>
              <p><strong>Year:</strong> {user.publication_year}</p>
              <p><strong>Pages:</strong> {user.number_of_pages}</p>
              <p><strong>Format:</strong> {user.format}</p>
              <p><strong>Binding:</strong> {user.binding}</p>
              <p><strong>ISBN:</strong> {user.ISBN}</p>
              <p><strong>Language:</strong> {user.language}</p>
              <p><strong>Age Restriction:</strong> {user.age_restriction}+ years</p>
              <p><strong>Title in Another Language:</strong> {user.title_in_another_language}</p>
            </div>
          </div>

          <div className="book-footer">
            <p className="book-rating">Rating: {user.rating} / 5</p>
            <p className="book-article-number">Article Number: {user.article_number}</p>
          </div>
        </div>
      ) : (
        <p className="no-book-found">No book found with this ID</p>
      )}
    </div>
  );
}

export { UserPage };
