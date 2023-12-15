import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export async function fetchFoods({ signal, searchTerm }) {
  let url = 'http://localhost:3000/foods';

  if (searchTerm) {
    url += '?name=' + searchTerm;
  }
  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error('Unable to fetch foods');
  }

  return await response.json();
}

export async function addOrder(){
  
}