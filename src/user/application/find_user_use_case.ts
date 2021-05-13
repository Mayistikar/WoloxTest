import { UserRepository } from '../domain/repositories/user_repository'

class FindUserUseCase {
  UserRepository: UserRepository;
  
  constructor(userRepository: UserRepository) {
    this.UserRepository = userRepository
  }

  GetAll() {
    return this.UserRepository.FindAll();
  }

}

export { FindUserUseCase }