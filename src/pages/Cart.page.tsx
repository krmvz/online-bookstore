import { useCart } from '../context/CartContext';
import './css/Cart.page.scss';

function CartPage() {
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="cart-page empty">
        <h1>Куржун</h1>
        <p>Сиздин куржунуңуз бош</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Куржун</h1>
      
      <div className="cart-items">
        {items.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>{item.author}</p>
            </div>
            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <div className="price">{item.price * item.quantity} сом</div>
            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>✕</button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="total">
          <span>Жалпы:</span>
          <span>{total} сом</span>
        </div>
        <button className="checkout-btn">Төлөө</button>
        <button className="clear-btn" onClick={clearCart}>Куржунду тазалоо</button>
      </div>
    </div>
  );
}

export { CartPage };