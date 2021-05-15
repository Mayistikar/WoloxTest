import { getRepository, Repository } from "typeorm";
import { User } from "./user_typeorm_entity";

class FindUserTypeOrm {

  UserTypeorm: Repository<User>

  constructor() {}

  async GetAll(): Promise<User[]> {    
    return getRepository(User).find();
  }

  async FindByUsername(username: string): Promise<User> {
    return getRepository(User).findOne({ username });
  }
}

export { FindUserTypeOrm }