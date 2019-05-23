import { User } from '../../../entities';
import { responseType } from '../responseType';

export interface AccountRepository {
  register(user: User): Promise<responseType<string>>;
  getToken(user: User): Promise<responseType<string>>;
}
