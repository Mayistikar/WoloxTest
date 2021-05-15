import { getRepository, Repository } from 'typeorm';
import { User } from './user_typeorm_entity'

class LoginUserTypeorm {
  UserTypeorm: Repository<User>
  constructor() {}

  async Login(username: string, hashPassword: string) {
    
  }
}
