export default function getUserData() {
  return JSON.parse(localStorage.getItem('USER_DATA')) || null;
}

export function getIsAdmin() {
  const { role } = JSON.parse(localStorage.getItem('USER_DATA')) || false;
  if (role === 'ROLE_ADMIN') {
    return true;
  }
  return false;
}
