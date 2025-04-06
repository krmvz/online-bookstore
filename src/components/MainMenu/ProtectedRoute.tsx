import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }

  // Allow access if user is verified or using Google sign-in
  if (!user.emailVerified && !user.providerData.some(provider => provider.providerId === 'google.com')) {
    return (
      <div className="auth-container">
        <div className="auth-box">
          <h2>Email текшерүү талап кылынат</h2>
          <p>Кызматты колдонуу үчүн электрондук почтаңызды текшериңиз.</p>
          <p>Текшерүү шилтемеси {user.email} дарегине жөнөтүлдү.</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}