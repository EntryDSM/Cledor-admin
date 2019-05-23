import { AccountRepository } from './adapters';
import { User } from '../entities';

export const registerUser = async (
  accountRepository: AccountRepository,
  user: User,
) => await accountRepository.register(user);
