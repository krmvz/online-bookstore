import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';
import './css/PaymentSuccess.page.scss';

export function PaymentSuccessPage() {
  return (
    <div className="payment-success">
      <div className="success-icon">
        <FiCheckCircle size={64} />
      </div>
      <h1>Төлөм ийгиликтүү жүргүзүлдү!</h1>
      <p>Сиздин буйрутмаңыз кабыл алынды. Биз сиз менен жакын арада байланышабыз.</p>
      <div className="action-buttons">
        <Link to="/" className="home-button">Башкы бетке кайтуу</Link>
        <Link to="/books" className="shop-button">Дагы китеп издөө</Link>
      </div>
    </div>
  );
}