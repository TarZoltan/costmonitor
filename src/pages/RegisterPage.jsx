import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userExists, saveUser } from '../utils/auth';
import './RegisterPage.css';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [fullname, setFullname] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (password !== passwordConfirm) {
      return setError('A jelszavak nem egyeznek.');
    }

    if (userExists(username)) {
      return setError('Ez a felhasználónév már foglalt.');
    }

    saveUser({ username, password, fullname });
    alert('Sikeres regisztráció! Most már bejelentkezhetsz.');
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <h2>Regisztráció</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Felhasználónév:
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Jelszó:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Jelszó megerősítése:
          <input
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          />
        </label>
        <label>
          Teljes név (opcionális):
          <input
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </label>
        <button type="submit">Regisztráció</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <p>
        Már van fiókod? <Link to="/login">Bejelentkezés</Link>
      </p>
    </div>
  );
}

export default RegisterPage;
