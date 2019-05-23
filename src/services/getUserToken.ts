import { AccountRepository } from './adapters';
import { User } from '../entities';

export const getUserToken = async (
  accountRepository: AccountRepository,
  user: User,
) => {
  return await accountRepository.getToken(user);
};
