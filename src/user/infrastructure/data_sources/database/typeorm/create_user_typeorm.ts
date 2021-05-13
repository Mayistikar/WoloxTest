import { getRepository, Repository } from 'typeorm';
import { User } from './user_typeorm_entity'

class CreateUserTypeOrm {
  UserTypeorm: Repository<User>
  constructor() {}

  async AddOne(user: any) {
    
    const _user = new User();
    
    _user.name = 'Name';
    _user.surname = 'Surname';
    _user.username = 'Username';
    _user.password = 'Password';
    _user.favoriteCoin = 'FavoriteCoin';

    return getRepository(User).save(_user);
  }
}

export { CreateUserTypeOrm }