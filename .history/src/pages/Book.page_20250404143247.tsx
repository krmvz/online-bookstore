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

  function UserPage() {
    // ... existing useState and useEffect ...
  
    return (
      <div className="user-page">
        <h1 className="title">Book Details</h1>
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
                <p className="book-author">By {user.author}</p>
                <div className="price-section">
                  <p className="book-price">{user.price} сом</p>
                  <button className="add-to-basket-btn" onClick={handleAddToBasket}>
                    <span className="basket-icon">🛒</span> Add to Basket
                  </button>
                </div>
                <p className="book-category">Category: {user.category}</p>
              </div>
            </div>
            // ... rest of the code remains the same