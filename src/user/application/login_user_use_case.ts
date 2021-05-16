import { DecodeBase64, GetBase64 } from "../../_shared/security/encode_decode";
import { ValidatePassword } from '../../_shared/security/hash_pass';
import { JWTGet } from "../../_shared/security/jwt";
import { UserRepository } from "../domain/repositories/user_repository";

class LoginUserUseCase {
  UserRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.UserRepository = userRepository;
  }

  async Login(basicAuth: string) {
    try {
      const credentials = this.getCredentials(basicAuth);
      const username = credentials.split(':')[0];
      const password = credentials.split(':')[1];
  
      const user = await this.UserRepository.FindByUsername(username);
      if (!user) throw new Error('invalid username or password');

      const isValidUser = await ValidatePassword(password, user.Password);
      if (!isValidUser) throw new Error('invalid username or password');

      const token = JWTGet(user);
      return token;
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