import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { User, books } from "../data/books.data";
import { useCart } from "../context/CartContext";
import './css/Book.page.scss';

function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const findedUser = books.find((item) => item.id === id);
    setUser(findedUser || null);
  }, [id]);

  const handleAddToCart = () => {
    if (user) {
      addToCart(user);
      alert(`${user.name} себетке кошулду!`);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-details">
      <div className="book-container">
        <div className="book-image">
          <img src={user.image} alt={user.name} />
        </div>
        <div className="book-info">
          <h1>{user.name}</h1>
          <p className="author">{user.author}</p>
          <p className="category">{user.category}</p>
          <p className="description">{user.description}</p>
          <div className="price-section">
            <p className="price">{user.price} сом</p>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Куржунга кошуу 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { UserPage };