import instanceGeego2 from "./config/instance.geego2";

// Manage access_token
export const token = {
  get:()=>{
    const token = sessionStorage.getItem('access_token');
    return token
  },

  set: (token) => {
    sessionStorage.setItem(
      'access_token',
      token
    )
  },

  reset: () => {
    sessionStorage.removeItem('access_token')
  },
};

const authEndpoint = '/auth'

export const getInfoUser = async () => {
  const res = await instanceGeego2.get(`${authEndpoint}/user`)
  return res;
}

export const logIn = async ({ email, password }) => {
    const response = await instanceGeego2.post(`${authEndpoint}/login`, {
      email,
      password,
    });
    token.set(response.data.token);
    return response;
}
