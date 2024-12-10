export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed. Please check your username or password.');
    }

    // Assuming the server returns a token
    const data = await response.json();
    return data;  // Returning data with token or anything else you need
  } catch (error) {
    throw new Error(error.message || 'Error during login attempt');
  }
};

// Function to fetch protected data
export const fetchProtectedData = async (endpoint, token) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`, {
      headers: {
        Authorization: `Token ${token}`,
     },
    });

    if (!response.ok) {
      throw new Error('Error fetching data');
    }

    return await response.json();  // Returning data from the server
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch protected data');
  }
};

// Example of another function to work with the API (if needed)
export const fetchPublicData = async (endpoint) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error('Error fetching public data');
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch public data');
  }
};