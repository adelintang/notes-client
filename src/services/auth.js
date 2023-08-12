export const signUpRequest = async (value) => {
  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(value)
  }

  const res = await fetch(`${import.meta.env.VITE_USER_API_URL}/register`, option);
  const data = await res.json();

  return data;
}

export const signInRequest = async (value) => {
  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(value)
  }

  const res = await fetch(`${import.meta.env.VITE_USER_API_URL}/login`, option);
  const data = await res.json();

  return data;
}

export const signOutRequest = async () => {
  const res = await fetch(`${import.meta.env.VITE_USER_API_URL}/logout`, {
    method: 'DELETE',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  const data = await res.json();
  return data;
}