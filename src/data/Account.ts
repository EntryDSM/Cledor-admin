import axios from 'axios';
import { url } from './url';
import { User } from '../entities';
import { AccountRepository } from '../services/adapters';

export class InmemoryAccountRepository implements AccountRepository {
  async register(user: User) {
    return await axios
      .post(`${url}/register`, user)
      .then(({ status, data }) => ({ status, data }));
  }

  async getToken(user: User) {
    return await axios
      .post<string>(`${url}/login`, user)
      .then(({ status, data }) => ({ status, data }));
  }
}
