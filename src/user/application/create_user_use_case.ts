import { CreateUserRepository } from '../domain/repositories/create_user_repository';

class CreateUserUseCase {
  CreateUserRepository: CreateUserRepository;

  constructor(createUserRepository: CreateUserRepository) {
    this.CreateUserRepository = createUserRepository
  }

  async AddOne(userDTO: any) {
    const user = userDTO // New User from userDTO
    return this.CreateUserRepository.AddOne(user);    
  }
}

export { CreateUserUseCase }