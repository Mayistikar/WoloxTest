import { Coin } from "../models/coin";

interface CoinRepository {
  Add(coin: Coin): Promise<Coin>;
  Ping(): Promise<boolean>;
  FindAll(): Promise<Coin[]>;
  FindAllUserCurrency(currency: string, filters: any): Promise<Coin[]>;
  FindByID(coinID: string): Promise<Coin>;
  FindByUIIDs(coinIDs: string[], currency: string): Promise<any[]>;  
}

export { CoinRepository }