import { getRepository } from 'typeorm'
import { Coin } from './entities/coin_typeorm_entity';

class CoinTypeormRepository  {

  constructor() {}

  async Add(coin: Coin): Promise<Coin> {
    return getRepository(Coin).save(coin);
  }
}

export { CoinTypeormRepository }