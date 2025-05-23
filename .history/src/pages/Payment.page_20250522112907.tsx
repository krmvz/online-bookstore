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
    postalCode: '',
    phone: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const [checkDetails, setCheckDetails] = useState({
    checkNumber: '',
    bankName: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({
    street: '',
    city: '',
    postalCode: '',
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
    if (!deliveryAddress.postalCode.trim()) {
      newErrors.postalCode = 'Почта индексин киргизиңиз';
    }
    if (!deliveryAddress.phone.trim()) {
      newErrors.phone = 'Телефон номерин киргизиңиз';
    } else if (!/^\+?\d{10,13}$/.test(deliveryAddress.phone)) {
      newErrors.phone = 'Туура телефон номерин киргизиңиз';
    }

    if (paymentMethod === 'card') {
      if (!cardDetails.cardNumber.trim()) {
        newErrors.cardNumber = 'Карта номерин киргизиңиз';
      } else if (!/^\d{16}$/.test(cardDetails.cardNumber.replace(/\s/g, ''))) {
        newErrors.cardNumber = 'Туура карта номерин киргизиңиз';
      }
      if (!cardDetails.expiryDate.trim()) {
        newErrors.expiryDate = 'Жарактуулук мөөнөтүн киргизиңиз';
      } else if (!/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(cardDetails.expiryDate)) {
        newErrors.expiryDate = 'Туура форматта киргизиңиз (MM/YY)';
      }
      if (!cardDetails.cvv.trim()) {
        newErrors.cvv = 'CVV кодун киргизиңиз';
      } else if (!/^\d{3,4}$/.test(cardDetails.cvv)) {
        newErrors.cvv = 'Туура CVV кодун киргизиңиз';
      }
    } else if (paymentMethod === 'check') {
      if (!checkDetails.checkNumber.trim()) {
        newErrors.checkNumber = 'Чек номерин киргизиңиз';
      }
      if (!checkDetails.bankName.trim()) {
        newErrors.bankName = 'Банктын атын киргизиңиз';
      }
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

  const deliveryFee = 150; // Fixed delivery fee
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
        <h2>Төлөм ыкмасы</h2>
        <div className="form-group">
          <label>Төлөм түрү:</label>
          <div className="payment-method-options">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Карта менен
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="check"
                checked={paymentMethod === 'check'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Чек менен
            </label>
          </div>
        </div>

        {paymentMethod === 'card' && (
          <div className="payment-details">
            <div className="form-group">
              <label htmlFor="cardNumber">Карта номери:</label>
              <input
                type="text"
                id="cardNumber"
                value={cardDetails.cardNumber}
                onChange={(e) => setCardDetails({...cardDetails, cardNumber: e.target.value})}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
              />
              {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate">Жарактуулук мөөнөтү:</label>
              <input
                type="text"
                id="expiryDate"
                value={cardDetails.expiryDate}
                onChange={(e) => setCardDetails({...cardDetails, expiryDate: e.target.value})}
                placeholder="MM/YY"
                maxLength={5}
              />
              {errors.expiryDate && <span className="error-message">{errors.expiryDate}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV:</label>
              <input
                type="password"
                id="cvv"
                value={cardDetails.cvv}
                onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                maxLength={4}
              />
              {errors.cvv && <span className="error-message">{errors.cvv}</span>}
            </div>
          </div>
        )}

        {paymentMethod === 'check' && (
          <div className="payment-details">
            <div className="form-group">
              <label htmlFor="checkNumber">Чек номери:</label>
              <input
                type="text"
                id="checkNumber"
                value={checkDetails.checkNumber}
                onChange={(e) => setCheckDetails({...checkDetails, checkNumber: e.target.value})}
              />
              {errors.checkNumber && <span className="error-message">{errors.checkNumber}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="bankName">Банктын аты:</label>
              <input
                type="text"
                id="bankName"
                value={checkDetails.bankName}
                onChange={(e) => setCheckDetails({...checkDetails, bankName: e.target.value})}
              />
              {errors.bankName && <span className="error-message">{errors.bankName}</span>}
            </div>
          </div>
        )}

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