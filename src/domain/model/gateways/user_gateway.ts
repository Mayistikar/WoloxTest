import { User } from '../entities/user'

interface UserGateway {
  FindAll(): User[]
}

export { UserGateway }