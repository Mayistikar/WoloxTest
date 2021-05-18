import { CoinRepository } from "../domain/repositories/coin_repository";
import { UserRepository } from "../../user/domain/repositories/user_repository";

class AddCoinUseCase {  
  CoinRepository: CoinRepository;
  UserRepository: UserRepository;

  constructor(    
    coinRepository: CoinRepository,
    userRepository: UserRepository
  ) {    
    this.CoinRepository = coinRepository;
    this.UserRepository = userRepository;
  }

  async AddCoin(UIID: string, userID: number): Promise<any> {
    try {
      const user = await this.UserRepository.FindById(userID);
      if (!user) throw new Error(`User doesn't exist userID: ${userID}`);

      const coin = await this.CoinRepository.FindByID(UIID);
      if (!coin) throw new Error(`Coin doesn't exist coinID: ${UIID}`);            

      const coinDB = await this.CoinRepository.Add(coin);

      user.Coins?.push(coinDB);
      const data = await this.UserRepository.AddOne(user);
      
      return coin;
    } catch (error) {
      console.error({ error });
      throw error;
    }
  }
}

export { AddCoinUseCase }