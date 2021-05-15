import { User } from '../models/user'

interface FindUserRepository {
  GetAll(): Promise<any[]>
  FindByUsername(username: string): Promise<any>
}

export { FindUserRepository }