import { useCart } from '../context/CartContext';
import { FiPlusCircle, FiMinusCircle, FiTrash2, FiShoppingCart } from 'react-icons/fi';
import './css/Cart.page.scss';

export function CartPage() {
  const { cartItems, loading, removeFromCart, updateQuantity } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  if (loading) {
    return <div className="cart-loading">Жүктөлүүдө...</div>;
  }

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <FiShoppingCart size={50} />
        <h2>Себет бош</h2>
        <p>Сиздин себетиңизде азырынча китеп жок</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Менин себетим</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.title} className="item-image" />
            <div className="item-details">
              <h3>{item.title}</h3>
              <p className="item-price">{item.price} сом</p>
              <div className="quantity-controls">
                <button 
                  onClick={() => updateQuantity(item.id!, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  className="quantity-btn"
                >
                  <FiMinusCircle size={20} />
                </button>
                <span>{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id!, item.quantity + 1)}
                  className="quantity-btn"
                >
                  <FiPlusCircle size={20} />
                </button>
                <button 
                  className="remove-button"
                  onClick={() => removeFromCart(item.id!)}
                >
                  <FiTrash2 size={18} /> Өчүрүү
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Жалпы: {calculateTotal()} сом</h3>
        <button className="checkout-button">
          <FiShoppingCart size={20} /> Сатып алуу
        </button>
      </div>
    </div>
  );
}