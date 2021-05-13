import { User } from '../models/user'

interface UserRepository {
  FindAll(): User[]
}

export { UserRepository }