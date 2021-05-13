import { User } from '../models/user'

interface FindUserRepository {
  GetAll(): User[]
}

export { FindUserRepository }