import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './css/Profile.page.scss';

export function ProfilePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <h1>Менин профилим</h1>
        
        <div className="profile-info">
          <div className="info-group">
            <label>Email</label>
            <p>{user?.email}</p>
          </div>

          <div className="info-group">
            <label>Акыркы кирүү</label>
            <p>{user?.metadata.lastSignInTime}</p>
          </div>
        </div>

        <div className="profile-actions">
          <button 
            className="edit-btn"
            onClick={() => setIsEditing(!isEditing)}
          >
            Профилди өзгөртүү
          </button>
          <button 
            className="logout-btn"
            onClick={handleLogout}
          >
            Чыгуу
          </button>
        </div>
      </div>
    </div>
  );
}