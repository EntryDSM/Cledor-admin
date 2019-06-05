import axios from 'axios';
import { BASE_URL } from './endpoint';
import { User } from '../entities/user';

export const registerUser = async (user: User): Promise<string> => {
  const response = await axios.post<string>(`${BASE_URL}/register`, user);
  return response.data;
};

export const loginUser = async (user: User): Promise<string> => {
  const response = await axios.post<string>(`${BASE_URL}/login`, user);
  return response.data;
};
