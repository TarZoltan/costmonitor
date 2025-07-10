import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLoggedInUser, logoutUser } from '../utils/auth';
import './DashboardPage.css';


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
  <div className="dashboard-container">
    <div className="dashboard-header">
      <div>
        <strong>Bejelentkezve:</strong> {user.fullname || user.username}
      </div>
      <button onClick={handleLogout}>Kijelentkezés</button>
    </div>

    <div className="dashboard-main">
      <h2>Üdv, {user.fullname || user.username}!</h2>
      <p>Itt fogjuk majd kezelni a költéseidet és statisztikáidat.</p>
    </div>
  </div>
);

}

export default DashboardPage;
