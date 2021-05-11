import { User } from "../../../../domain/model/entities/user";

interface UserAdapter {
  FindAll(): User[];
}

export { UserAdapter }