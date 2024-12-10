import { useState, useEffect } from "react";

const useToken = () => {
  const [token, setToken] = useState(null);

  // Function to get the token from localStorage
  const getToken = () => {
    if (typeof window !== "undefined") {
      const tokenString = localStorage.getItem("token");
      return tokenString ? JSON.parse(tokenString)?.key : null;
    }
    return null;  // If running on the server, return null
  };

  // Function to save the token in localStorage
  const saveToken = (userToken) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("token", JSON.stringify(userToken));
      setToken(userToken?.key);
    }
  };

  // Function to remove the token from localStorage
  const removeToken = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      setToken(null);
    }
  };

  // Using useEffect to initialize the token state on the client
  useEffect(() => {
    const storedToken = getToken();
    if (storedToken) {
      setToken(storedToken);
    } else {
      removeToken();
    }
  }, []);

  return { token, setToken: saveToken, removeToken };
};

export default useToken;