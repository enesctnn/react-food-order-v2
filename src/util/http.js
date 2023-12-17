import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export async function fetchFoods({ signal, searchTerm }) {
  let url = 'http://localhost:3000/foods';

  if (searchTerm) {
    url += '?name=' + searchTerm;
  }
  const response = await fetch(url, {
    method: 'GET',
    signal,
  });

  if (!response.ok) {
    throw new Error('Unable to fetch foods');
  }

  return await response.json();
}

export async function userLogin({ email, password }) {
  const response = await fetch('http://localhost:3000/users');
  const resData = await response.json();
  if (!response.ok) {
    throw new Error('Could not reach User Info');
  }

  const existingUserData = resData.filter(
    (user) => user.email === email && user.password === password
  )[0];

  return {
    role: existingUserData.role,
    'user-name': existingUserData['user-name'],
    'postal-code': existingUserData['postal-code'],
    adress: existingUserData.adress,
    city: existingUserData.city,
    street: existingUserData.street,
    'user-id': existingUserData.id,
  };
}
export async function signUpUser({ user, id }) {
  try {
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...user,
        role: 'ROLE_USER',
        id,
      }),
    });
    if (!response.ok) {
      throw new Error('Could not Sign Up the user');
    }
  } catch (error) {
    window.alert('Error during sign up:' + error.message);
  }
}

export async function addOrder() {}
