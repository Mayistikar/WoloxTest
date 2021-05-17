import { getRepository } from 'typeorm';
import { User } from './entities/user_typeorm_entity'

class UserTypeormRepository {
  
  constructor() {}

  async AddOne(user: User): Promise<User> {
    return getRepository(User).save(user);
  }

  async FindAll(): Promise<User[]> {    
    return getRepository(User).find();
  }

  async FindById(Id: number): Promise<User> {
    return getRepository(User).findOne({
      where: { Id },
      relations: [ "Coins" ]
    });
  } 

  async FindByUsername(Username: string): Promise<User> {
    return getRepository(User).findOne({ Username });
  }
}

export { UserTypeormRepository }