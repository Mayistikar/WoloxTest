import { User } from '../../../../domain/model/entities/user';
import { UserAdapter } from '../../adapters/user/user_adapter'

class UserRepository {
  UserAdapter: UserAdapter;

  constructor(userAdapter: UserAdapter) {
    this.UserAdapter = userAdapter;
  }

  FindAll(): User[] {
    return this.UserAdapter.FindAll();
  }
}

export { UserRepository }