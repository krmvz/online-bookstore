import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../config/firebase';
import './css/Auth.page.scss';

export function ResetPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess(true);
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (err) {
      setError('Паролду калыбына келтирүүдө ката кетти');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Паролду калыбына келтирүү</h2>
        {error && <p className="error">{error}</p>}
        {success ? (
          <p className="success">
            Паролду калыбына келтирүү шилтемеси email дарегиңизге жөнөтүлдү
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit">Жөнөтүү</button>
          </form>
        )}
      </div>
    </div>
  );
}