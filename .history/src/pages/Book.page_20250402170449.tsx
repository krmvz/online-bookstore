import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { User, books } from "../data/books.data";
import ''
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
      <h1 className="title">Book Details</h1>
      {user ? (
        <div className="book-details">
          <img className="book-image" src={user.image} alt={user.name} />
          <div className="book-info">
            <h2 className="book-name">{user.name}</h2>
            <p className="book-price">Price: {user.price} сом</p>
            <p className="book-e-price">E-Book Price: {user.e_price} сом</p>
            <p className="book-audio-price">Audio Price: {user.audio_price} сом</p>
            <p className="book-author">Author: {user.author}</p>
            <p className="book-publisher">Publisher: {user.publisher}</p>
            <p className="book-year">Publication Year: {user.publication_year}</p>
            <p className="book-series">Series: {user.series}</p>
            <p className="book-category">Category: {user.category}</p>
            <p className="book-pages">Number of Pages: {user.number_of_pages}</p>
            <p className="book-format">Format: {user.format}</p>
            <p className="book-binding">Binding: {user.binding}</p>
            <p className="book-isbn">ISBN: {user.ISBN}</p>
            <p className="book-age-restriction">Age Restriction: {user.age_restriction}</p>
            <p className="book-language">Language: {user.language}</p>
            <p className="book-title-in-another-language">Title in Another Language: {user.title_in_another_language}</p>
            <p className="book-article-number">Article Number: {user.article_number}</p>
            <p className="book-short-info">{user.short_info_about_book}</p>
            <p className="book-rating">Rating: {user.rating} / 5</p>
            <p className="book-country-category">Country Category: {user.country_category}</p>
          </div>
        </div>
      ) : (
        <p className="no-book-found">No book found with this ID</p>
      )}
    </div>
  );
}

export { UserPage };
