import { Coin } from "../models/coin";

interface CoinRepository {
  Ping(): Promise<boolean>;
  FindAll(): Promise<Coin[]>;
  FindAllUserCurrency(currency: string): Promise<Coin[]>;
}

export { CoinRepository }