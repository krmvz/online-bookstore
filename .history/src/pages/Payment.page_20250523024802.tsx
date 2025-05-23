import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { usePayment } from '../context/PaymentContext';
import { useNavigate } from 'react-router-dom';
import './css/Payment.page.scss';

export function PaymentPage() {
  const { cartItems, clearCart } = useCart();
  const { 
    calculateDeliveryFee, 
    calculateTotal, 
    processPayment,
    isProcessingPayment 
  } = usePayment();
  const navigate = useNavigate();

  const [deliveryAddress, setDeliveryAddress] = useState({
    street: '',
    city: 'Бишкек',
    phone: ''
  });

  const bankDetails = {
    accountNumber: '1234567890',
    bankName: 'Optima Bank',
    accountHolder: 'Book Store LLC'
  };

  const [errors, setErrors] = useState<Record<string, string>>({
    street: '',
    city: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDeliveryAddress(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!deliveryAddress.street.trim()) {
      newErrors.street = 'Көчө дарегин киргизиңиз';
    }
    if (!deliveryAddress.city) {
      newErrors.city = 'Шаарды тандаңыз';
    }
    if (!deliveryAddress.phone.trim()) {
      newErrors.phone = 'Телефон номерин киргизиңиз';
    } else if (!/^\+?\d{10,13}$/.test(deliveryAddress.phone)) {
      newErrors.phone = 'Туура телефон номерин киргизиңиз';
    }



    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const success = await processPayment(cartItems, deliveryAddress);
    
    if (success) {
      clearCart();
      navigate('/payment-success');
    } else {
      alert('Төлөм жүргүзүүдө ката кетти. Кайра аракет кылыңыз.');
    }
  };

  const deliveryFee = calculateDeliveryFee(deliveryAddress.city);
  const total = calculateTotal(cartItems, deliveryFee);

  if (cartItems.length === 0) {
    return (
      <div className="payment-empty">
        <h2>Сиздин себетиңиз бош</h2>
        <p>Төлөм жүргүзүү үчүн алгач китептерди тандаңыз</p>
      </div>
    );
  }

  return (
    <div className="payment-container">
      <div className="payment-summary">
        <h2>Буйрутма жыйынтыгы</h2>
        <div className="order-items">
          {cartItems.map(item => (
            <div key={item.id} className="order-item">
              <img src={item.imageUrl} alt={item.title} />
              <div className="item-details">
                <h3>{item.title}</h3>
                <p>{item.quantity} x {item.price} сом</p>
              </div>
              <div className="item-total">
                {item.quantity * item.price} сом
              </div>
            </div>
          ))}
        </div>
        <div className="cost-breakdown">
          <div className="cost-row">
            <span>Китептердин баасы:</span>
            <span>{total - deliveryFee} сом</span>
          </div>
          <div className="cost-row">
            <span>Жеткирүү акысы:</span>
            <span>{deliveryFee} сом</span>
          </div>
          <div className="cost-row total">
            <span>Жалпы сумма:</span>
            <span>{total} сом</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="delivery-form">
        <h2>Төлөм маалыматы</h2>
        <div className="payment-details">
          <div className="bank-transfer-info">
            <h3>Банк аркылуу которуу</h3>
            <div className="bank-details">
              <p><strong>Банк:</strong> {bankDetails.bankName}</p>
              <p><strong>Эсеп номери:</strong> {bankDetails.accountNumber}</p>
              <p><strong>Алуучу:</strong> {bankDetails.accountHolder}</p>
            </div>
          </div>
          <div className="qr-code-section">
            <h3>QR-код менен төлөө</h3>
            <img src="/qr-code.svg" alt="Payment QR Code" className="qr-code" />
            <p>QR-кодду сканерлеп, төлөмдү жүргүзүңүз</p>
          </div>
        </div>



        <h2>Жеткирүү дареги</h2>
        
        <div className="form-group">
          <label htmlFor="street">Көчө дареги:</label>
          <input
            type="text"
            id="street"
            name="street"
            value={deliveryAddress.street}
            onChange={handleInputChange}
            className={errors.street ? 'error' : ''}
          />
          {errors.street && <span className="error-message">{errors.street}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="city">Шаар:</label>
          <select
            id="city"
            name="city"
            value={deliveryAddress.city}
            onChange={handleInputChange}
            className={errors.city ? 'error' : ''}
          >
            <option value="Бишкек">Бишкек</option>
            <option value="Ош">Ош</option>
            <option value="Жалал-Абад">Жалал-Абад</option>
            <option value="Каракол">Каракол</option>
            <option value="Нарын">Нарын</option>
            <option value="Талас">Талас</option>
            <option value="Баткен">Баткен</option>
          </select>
          {errors.city && <span className="error-message">{errors.city}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="postalCode">Почта индекси:</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={deliveryAddress.postalCode}
            onChange={handleInputChange}
            className={errors.postalCode ? 'error' : ''}
          />
          {errors.postalCode && <span className="error-message">{errors.postalCode}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Телефон:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={deliveryAddress.phone}
            onChange={handleInputChange}
            placeholder="+996"
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        <button 
          type="submit" 
          className="submit-button" 
          disabled={isProcessingPayment}
        >
          {isProcessingPayment ? 'Төлөм жүргүзүлүүдө...' : 'Төлөм жүргүзүү'}
        </button>
      </form>
    </div>
  );
}