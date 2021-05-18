import { CoinDTO } from './dtos/coin_dto';
import { CoinTypeormRepository } from './database/typeorm/coin_typeorm';
import { CoinGeckoSDK } from './sdk/coin_gecko/coin_gecko';
import { UserDTO } from '../../../user/infrastructure/entry_points/dtos/user_dto';

class CoinImpRepository {
  CoinGeckoSDK: CoinGeckoSDK;
  CoinTypeormRepository: CoinTypeormRepository;

  constructor() {
    this.CoinGeckoSDK = new CoinGeckoSDK();
    this.CoinTypeormRepository = new CoinTypeormRepository();
  }

  async Add(coin: any): Promise<any> {    
    return this.CoinTypeormRepository.Add(coin);
  }

  async Ping(): Promise<boolean> {
    return this.CoinGeckoSDK.Ping();
  }

  async FindAll(): Promise<CoinDTO[]> {
    return this.CoinGeckoSDK.FindAll();
  }

  async FindAllUserCurrency(currency: string, filters: any): Promise<CoinDTO[]> {        
    return this.CoinGeckoSDK.FindAllUserCurrency(currency, filters);
  }

  async FindByID(coinID: string): Promise<CoinDTO> {
    return this.CoinGeckoSDK.FindByID(coinID);
  }

  async FindByUIIDs(coinIDs: string[], currency: string): Promise<CoinDTO[]> {
    return this.CoinGeckoSDK.FindByUIIDs(coinIDs, currency);
  }
}

export { CoinImpRepository }