export default function auth() {
  const loginData = localStorage.getItem('USER_DATA') || null;

  if (loginData) {
    return true;
  }
  return false;
}
