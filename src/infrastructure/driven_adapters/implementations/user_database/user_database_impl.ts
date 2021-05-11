import { User } from "../../../../domain/model/entities/user";

class UserDatabaseImpl {
  FindAll(): User[] {
    const user = new User();
    return [user];
  }
}

export { UserDatabaseImpl }