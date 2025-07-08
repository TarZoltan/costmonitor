import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div>
      <h2>Bejelentkezés</h2>
      <form>
        <label>
          Felhasználónév:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Jelszó:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Bejelentkezés</button>
      </form>
      <p>
        Nincs még fiókod? <Link to="/register">Regisztrálj itt</Link>
      </p>
    </div>
  );
}

export default LoginPage;