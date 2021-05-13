import { FindUserRepository } from '../domain/repositories/find_user_repository'

class FindUserUseCase {
  FindUserRepository: FindUserRepository;
  
  constructor(findUserRepository: FindUserRepository) {
    this.FindUserRepository = findUserRepository
  }

  GetAll() {
    return this.FindUserRepository.GetAll();
  }

}

export { FindUserUseCase }