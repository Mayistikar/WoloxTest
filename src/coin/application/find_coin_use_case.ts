import { UserRepository } from "../../user/domain/repositories/user_repository";
import { Coin } from "../domain/models/coin";
import { CoinRepository } from "../domain/repositories/coin_repository";

class FindCoinUseCase {
  CoinRepository: CoinRepository
  UserRepository: UserRepository;

  constructor(
    coinRepository: CoinRepository,
    userRepository: UserRepository
  ) {
    this.CoinRepository = coinRepository;
    this.UserRepository = userRepository;
  }

  async FindAll(): Promise<Coin[]> {
    try {
      const isAvailable = await this.CoinRepository.Ping();
      if (!isAvailable) throw new Error('Coin Gecko Api is unavailable');

      return this.CoinRepository.FindAll();
    } catch (error) {
      console.error({ error });
      throw error;
    }
    
  }

  async FindAllUserCurrency(userId: number, filters: any): Promise<Coin[]> {
    try {
      const isAvailable = await this.CoinRepository.Ping();
      if (!isAvailable) throw new Error('Coin Gecko Api is unavailable');

      const user = await this.UserRepository.FindById(userId);
      if (!user) throw new Error(`UserId: ${userId} unavailable`);

      return this.CoinRepository.FindAllUserCurrency(user.Currency, filters);
    } catch (error) {
      console.error({ error });
      throw error;
    }
  }
}

export { FindCoinUseCase }