import { User } from "../models/user";

interface UserRepository {
  AddOne(user: User): Promise<User>;
  FindAll(): Promise<User[]>;
  FindById(userID: number): Promise<User>;
  FindByUsername(username: string): Promise<User>;
}

export { UserRepository }