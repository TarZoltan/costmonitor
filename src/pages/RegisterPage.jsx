import React from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <div>
      <h2>Regisztráció</h2>
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
        <label>
          Jelszó megerősítése:
          <input type="password" name="passwordConfirm" />
        </label>
        <br />
        <label>
          Teljes név (opcionális):
          <input type="text" name="fullname" />
        </label>
        <br />
        <button type="submit">Regisztráció</button>
      </form>
      <p>
        Már van fiókod? <Link to="/login">Bejelentkezés</Link>
      </p>
    </div>
  );
}

export default RegisterPage;
