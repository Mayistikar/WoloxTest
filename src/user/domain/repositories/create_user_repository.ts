import { User } from "../models/user";

interface CreateUserRepository {
  AddOne(user: User): Promise<any>
}

export { CreateUserRepository }