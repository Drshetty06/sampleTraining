const API_URL = 'http://localhost:8085/authenticate';
//base url
const authenticate = async (email, password) => {
    //fetch or axios
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error('Authentication failed');
  }

  const data = await response.json();
  return data;
};

export default authenticate;
