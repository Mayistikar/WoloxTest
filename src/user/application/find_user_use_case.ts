import { UserRepository } from '../domain/repositories/user_repository'

class FindUserUseCase {
  UserRepository: UserRepository;
  
  constructor(userRepository: UserRepository) {
    this.UserRepository = userRepository;
  }

  FindAll() {
    return this.UserRepository.FindAll();
  }

  FindByUsername(username: string) {
    return this.UserRepository.FindByUsername(username);
  }

}

export { FindUserUseCase }