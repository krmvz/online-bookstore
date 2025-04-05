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

  return (
    <div className="user-page">
      <h1 className="page-title">Book Details</h1>
      {user ? (
        <div className="book-container">
          <div className="book-image-container">
            <img className="book-image" src={user.image} alt={user.name} />
          </div>
          <div className="book-info">
            <h2 className="book-title">{user.name}</h2>
            <p className="book-author">{user.author}</p>
            <p className="book-price">Price: <span className="price">{user.price} сом</span></p>
            <p className="book-e-price">E-Book Price: <span className="price">{user.e_price} сом</span></p>
            <p className="book-audio-price">Audio Price: <span className="price">{user.audio_price} сом</span></p>
            <div className="book-details-grid">
              <div>
                <p><strong>Publisher:</strong> {user.publisher}</p>
                <p><strong>Publication Year:</strong> {user.publication_year}</p>
                <p><strong>Category:</strong> {user.category}</p>
                <p><strong>Language:</strong> {user.language}</p>
                <p><strong>Series:</strong> {user.series}</p>
                <p><strong>ISBN:</strong> {user.ISBN}</p>
              </div>
              <div>
                <p><strong>Pages:</strong> {user.number_of_pages}</p>
                <p><strong>Binding:</strong> {user.binding}</p>
                <p><strong>Age Restriction:</strong> {user.age_restriction}</p>
                <p><strong>Rating:</strong> {user.rating} / 5</p>
                <p><strong>Country Category:</strong> {user.country_category}</p>
              </div>
            </div>
            <p className="book-short-info"><strong>About the Book:</strong> {user.short_info_about_book}</p>
            <p className="book-article-number"><strong>Article Number:</strong> {user.article_number}</p>
            <p className="book-title-in-another-language"><strong>Title in Another Language:</strong> {user.title_in_another_language}</p>
          </div>
        </div>
      ) : (
        <p className="no-book-found">No book found with this ID</p>
      )}
    </div>
  );
}

export { UserPage };
