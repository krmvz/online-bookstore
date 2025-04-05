import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { User, books } from "../data/books.data";
import './css/Book.page.scss'

function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const findedUser = books.find((item) => item.id === id);
    setUser(findedUser || null);
  }, [id]);

  const handleAddToBasket = () => {
    alert(`${user?.name} себетке кошулду!`);
  };

  return (
    <div className="user-page">
      <h1 className="title">Китеп жөнүндө маалымат</h1>
      {user ? (
        <div className="book-card">
          <div className="book-header">
            <div className="book-image-container">
              <img className="book-image" src={user.image} alt={user.name} />
              <div className="book-rating-badge">
                <span>★ {user.rating}</span>
              </div>
            </div>
            <div className="book-info">
              <h2 className="book-name">{user.name}</h2>
              <p className="book-author">Автор: {user.author}</p>
              <div className="price-section">
                <p className="book-price">{user.price} сом</p>
                <button className="add-to-basket-btn" onClick={handleAddToBasket}>
                  <span className="basket-icon">🛒</span>  кошуу
                </button>
              </div>
              <p className="book-category">Категория: {user.category}</p>
            </div>
          </div>

          <div className="book-details">
            <p className="book-description"><i>{user.short_info_about_book}</i></p>
            <div className="book-meta">
              <p><strong>Басмакана:</strong> {user.publisher}</p>
              <p><strong>Жылы:</strong> {user.publication_year}</p>
              <p><strong>Беттер:</strong> {user.number_of_pages}</p>
              <p><strong>Формат:</strong> {user.format}</p>
              <p><strong>Мукабасы:</strong> {user.binding}</p>
              <p><strong>ISBN:</strong> {user.ISBN}</p>
              <p><strong>Тили:</strong> {user.language}</p>
              <p><strong>Жаш чектөө:</strong> {user.age_restriction}+ жаш</p>
              <p><strong>Башка тилдеги аталышы:</strong> {user.title_in_another_language}</p>
            </div>
          </div>

          <div className="book-footer">
            <p className="book-rating">Рейтинг: {user.rating} / 5</p>
            <p className="book-article-number">Артикул: {user.article_number}</p>
          </div>
        </div>
      ) : (
        <p className="no-book-found">Мындай ID менен китеп табылган жок</p>
      )}
    </div>
  );
}

export { UserPage };