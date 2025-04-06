import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FirebaseError } from 'firebase/app';
import { testFirebaseConnection } from '../utils/firebaseTest';
import './css/Auth.page.scss';

export function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const isFirebaseReady = testFirebaseConnection();
    if (!isFirebaseReady) {
      setError('Firebase initialization failed');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    if (!signUp) {
      console.error('signUp function is not available');
      setError('System error: Authentication not initialized');
      setIsLoading(false);
      return;
    }

    try {
        await signUp(email, password);
        setSuccess(`Каттоо ийгиликтүү! 
          Сиздин ${email} почтаңызга текшерүү шилтемеси жөнөтүлдү. 
          Каттоону аяктоо үчүн почтаңызды текшериңиз.`);
        setTimeout(() => {
          navigate('/login');
        }, 5000);
    } catch (err) {
      console.error('Registration error:', err);
      const firebaseError = err as FirebaseError;
      
      switch (firebaseError.code) {
        case 'auth/email-already-in-use':
          setError('Бул email менен катталган колдонуучу бар');
          break;
        case 'auth/invalid-email':
          setError('Туура эмес email форматы');
          break;
        case 'auth/weak-password':
          setError('Пароль өтө жөнөкөй. Кеминде 6 символ болушу керек');
          break;
        default:
          setError(`Каттоодо ката кетти: ${firebaseError.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Катталуу</h2>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <div className="form-group">
            <label>Пароль</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              disabled={isLoading}
            />
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Күтүңүз...' : 'Катталуу'}
          </button>
        </form>
        <div className="auth-divider">же</div>
        <button className="google-btn" disabled={isLoading}>
          Google менен кирүү
        </button>
        <div className="auth-links">
          <Link to="/login">Аккаунтуңуз барбы? Кирүү</Link>
        </div>
      </div>
    </div>
  );
}