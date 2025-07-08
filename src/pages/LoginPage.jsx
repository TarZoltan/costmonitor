import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validateLogin, loginUser } from '../utils/auth';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const user = validateLogin(username, password);

    if (!user) {
      return setError('Hibás felhasználónév vagy jelszó.');
    }

    loginUser(user); // mentjük, hogy be van jelentkezve
    navigate('/dashboard'); // később készítjük el ezt az oldalt
  };

  return (
    <div>
      <h2>Bejelentkezés</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Felhasználónév:
          <input value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <br />
        <label>
          Jelszó:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Bejelentkezés</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <p>
        Nincs még fiókod? <Link to="/register">Regisztrálj itt</Link>
      </p>
    </div>
  );
}

export default LoginPage;
