import axios from 'axios';
import { BASE_URL } from './endpoint';
import { User } from '../entities/user';

export const registerUser = async (
  user: User,
): Promise<{ token: string; user: User }> => {
  const response = await axios.post<{ token: string; user: User }>(
    `${BASE_URL}/register`,
    user,
  );
  return response.data;
};

export const loginUser = async (
  user: User,
): Promise<{ token: string; user: User }> => {
  const response = await axios.post<{ token: string; user: User }>(
    `${BASE_URL}/login`,
    user,
  );
  return response.data;
};
