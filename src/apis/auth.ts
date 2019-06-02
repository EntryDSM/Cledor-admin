import axios from 'axios';
import { BASE_URL } from './url';

interface User {
  email: string;
  username?: string;
  password: string;
}

export const registerUser = async (user: User): Promise<string> => {
  const response = await axios.post<string>(`${BASE_URL}/register`, user);
  return response.data;
};

export const loginUser = async (user: User): Promise<string> => {
  const response = await axios.post<string>(`${BASE_URL}/login`, user);
  return response.data;
};
