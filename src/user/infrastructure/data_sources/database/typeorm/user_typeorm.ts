import { getRepository } from 'typeorm';
import { User } from './entities/user_typeorm_entity'

class UserTypeormRepository {
  
  constructor() {}

  async AddOne(user: any): Promise<any> {
    return getRepository(User).save(user);
  }

  async FindAll(): Promise<any[]> {    
    return getRepository(User).find();
  }

  async FindById(Id: number): Promise<any> {
    return getRepository(User).findOne({ Id });
  } 

  async FindByUsername(Username: string): Promise<any> {
    return getRepository(User).findOne({ Username });
  }
}

export { UserTypeormRepository }