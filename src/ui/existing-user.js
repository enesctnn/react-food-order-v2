export async function userExistsChecker({ email }) {
  const url = 'http://localhost:3000/users?email=' + email;
  try {
    const response = await fetch(url);
    const resData = await response.json();
    if (!response.ok) {
      throw new Error('An Error occurred during user fetch');
    }
    if (resData[0]) {
      return 'This email adress is already in use!';
    }
    return null;
  } catch (error) {
    window.alert('User matching failed:' + error.message);
  }
  return null;
}