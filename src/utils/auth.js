// LocalStorage kulcs
const USERS_KEY = 'users';
const LOGGED_IN_KEY = 'loggedInUser';

// Felhasználók lekérése
export function getUsers() {
  const data = localStorage.getItem(USERS_KEY);
  return data ? JSON.parse(data) : [];
}

// Felhasználó mentése
export function saveUser(user) {
  const users = getUsers();
  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Létezik-e már a név
export function userExists(username) {
  return getUsers().some(u => u.username === username);
}

// Bejelentkezési ellenőrzés
export function validateLogin(username, password) {
  return getUsers().find(u => u.username === username && u.password === password);
}

// Aktív bejelentkezés mentése
export function loginUser(user) {
  localStorage.setItem(LOGGED_IN_KEY, JSON.stringify(user));
}

// Jelenlegi bejelentkezett felhasználó
export function getLoggedInUser() {
  const data = localStorage.getItem(LOGGED_IN_KEY);
  return data ? JSON.parse(data) : null;
}

// Kijelentkezés
export function logoutUser() {
  localStorage.removeItem(LOGGED_IN_KEY);
}
