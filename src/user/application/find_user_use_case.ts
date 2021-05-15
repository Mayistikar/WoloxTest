import { FindUserRepository } from '../domain/repositories/find_user_repository'

class FindUserUseCase {
  FindUserRepository: FindUserRepository;
  
  constructor(findUserRepository: FindUserRepository) {
    this.FindUserRepository = findUserRepository
  }

  GetAll() {
    return this.FindUserRepository.GetAll();
  }

  FindByUsername(username: string) {
    return this.FindUserRepository.FindByUsername(username);
  }

}

export { FindUserUseCase }