import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FirebaseError } from 'firebase/app';
import './css/Auth.page.scss';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      const firebaseError = err as FirebaseError;
      console.error('Login error:', firebaseError);
      
      // More specific error messages
      if (firebaseError.code === 'auth/user-not-found' || firebaseError.code === 'auth/wrong-password') {
        setError('Туура эмес email же пароль');
      } else if (firebaseError.code === 'auth/too-many-requests') {
        setError('Көп жолу аракет кылдыңыз. Бир аздан кийин кайра аракет кылыңыз');
      } else {
        setError('Кирүүдө ката кетти. Кайра аракет кылыңыз');
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate(from, { replace: true });
    } catch (err) {
      setError('Google менен кирүүдө ката кетти');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Кирүү</h2>
        {error && <p className="error">{error}</p>}
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
          <div className="form-group">
            <label>Пароль</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Link to="/reset-password" className="forgot-password">
              Паролду унуттуңузбу?
            </Link>
          </div>
          <button type="submit">Кирүү</button>
        </form>
        <div className="auth-divider">же</div>
        <button onClick={handleGoogleSignIn} className="google-btn">
          Google менен кирүү
        </button>
      </div>
    </div>
  );
}