import axios from 'axios';

const API_URL = 'http://localhost:3000/api/users';
const register = async (userData) => {
  let response = await axios.post(API_URL + '/register', userData);
  console.log(response);
  if (response.data) {
    const user = { ...response.data };
    localStorage.setItem('user', JSON.stringify(user));
  }
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(API_URL + '/login', userData);

  if (response.data) {
    const user = { ...response.data };
    localStorage.setItem('user', JSON.stringify(user));
  }
  return response.data;
};
const logout = () => localStorage.removeItem('user');

export const userService = {
  register,
  login,
  logout,
};
