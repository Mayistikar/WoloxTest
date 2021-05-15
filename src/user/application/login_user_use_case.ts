import { DecodeBase64, GetBase64 } from "../../_shared/security/encode_decode";
import { ValidatePassword } from '../../_shared/security/hash_pass';
import { JWTGet } from "../../_shared/security/jwt";
import { FindUserRepository } from "../domain/repositories/find_user_repository";

class LoginUserUseCase {
  FindUserRepository: FindUserRepository

  constructor(findUserRepository: FindUserRepository) {
    this.FindUserRepository = findUserRepository;
  }

  async Login(basicAuth: string) {
    try {
      const credentials = this.getCredentials(basicAuth);
      const username = credentials.split(':')[0];
      const password = credentials.split(':')[1];
  
      const user = await this.FindUserRepository.FindByUsername(username);
      if (!user) throw new Error('invalid username or password');

      const isValidUser = await ValidatePassword(password, user.password);
      if (!isValidUser) throw new Error('invalid username or password');

      const token = JWTGet(user);
      return { token };
    } catch (error) {
      throw new Error(error);
    }
  }

  getCredentials(basicAuth: string): string {
    const base64Encode = GetBase64(basicAuth);
    return DecodeBase64(base64Encode);    
  }
}

export { LoginUserUseCase }