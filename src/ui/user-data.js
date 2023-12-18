export default function getUserData() {
  return JSON.parse(localStorage.getItem('USER_DATA')) || null;
}
