import { CurrencyRepository } from '../../currency/domain/repositories/currency_repository';
import { HashPassword } from '../../_shared/security/hash_pass';
import { UserRepository } from '../domain/repositories/user_repository';

class CreateUserUseCase {
  UserRepository: UserRepository;
  CurrencyRepository: CurrencyRepository;

  constructor(
    userRepository: UserRepository,
    currencyRepository: CurrencyRepository
  ) {
    this.UserRepository = userRepository;
    this.CurrencyRepository = currencyRepository;
  }

  async AddOne(userDTO: any) {    
    try {
      // User already exists
      const user = await this.UserRepository.FindByUsername(userDTO?.username);
      if (user) throw new Error('User already exists');
    
      // Currency is available
      const currencies = await this.CurrencyRepository.FindAll();
      const currencyNames = [];
      let userCurrency = null;

      currencies.forEach(currency => {
        currencyNames.push(currency?.Name);
        if (currency?.Name === userDTO?.Currency?.toLowerCase()) userCurrency = currency?.Name;
      });

      if (!userCurrency) throw Error(`Currency not available, please use one of this [${currencyNames}]`);
      
      // Hashing password
      userDTO.Password = await HashPassword(userDTO?.Password);
      
      return this.UserRepository.AddOne(userDTO); 
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export { CreateUserUseCase }