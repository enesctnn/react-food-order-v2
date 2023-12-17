import { redirect } from 'react-router-dom';

export function action() {
  localStorage.removeItem('USER_DATA');
  return redirect('/');
}
