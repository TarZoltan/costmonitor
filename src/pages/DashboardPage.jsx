import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLoggedInUser, logoutUser } from '../utils/auth';

function DashboardPage() {
  const navigate = useNavigate();
  const user = getLoggedInUser();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Fejléc bal felső sarokban */}
      <div style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <strong>Bejelentkezve:</strong> {user.fullname || user.username}
        <button onClick={handleLogout} style={{ marginLeft: '1rem' }}>Kijelentkezés</button>
      </div>

      {/* Főtartalom külön dobozban */}
      <div style={{ padding: '2rem' }}>
        <h2>Üdv, {user.fullname || user.username}!</h2>
        <p>Itt fogjuk majd kezelni a költéseidet és statisztikáidat.</p>
      </div>
    </div>
  );
}

export default DashboardPage;
