import { CoinDTO, CoinDTOBuilder } from '../../dtos/coin_dto';

const CoinGecko = require('coingecko-api');

class CoinGeckoSDK {
  CoinGeckoClient: any;

  constructor() {
    this.CoinGeckoClient = new CoinGecko();
  }

  async Ping(): Promise<boolean> {
    const data = await this.CoinGeckoClient.ping();
    if (data && data.success) return true;
    return false;
  }

  async FindAll(): Promise<CoinDTO[]> {
    const response = await this.CoinGeckoClient.coins.all();
    const coins = response?.data.map(coin => {
      const coinDTOBuilder = new CoinDTOBuilder();
      return coinDTOBuilder.Image(coin.image?.small).Name(coin.name).Price(coin.market_data?.current_price).Symbol(coin.symbol).UpdatedAt(coin.last_updated).Build();     
    });
    return coins;
  }

  async FindAllUserCurrency(currency: string): Promise<CoinDTO[]> {
    const allCoins = await this.CoinGeckoClient.coins.list();
    const total = allCoins?.data?.length || 0;    
    const response = await this.CoinGeckoClient.coins.markets({ per_page: total, vs_currency: currency });
    const coins = response?.data.map(coin => {
      const coinDTOBuilder = new CoinDTOBuilder();
      return coinDTOBuilder
        .Image(coin.image?.small)
        .Name(coin.name)
        .Price(coin.current_price)
        .Symbol(coin.symbol)
        .UpdatedAt(coin.last_updated)
        .Build();
    });
    return coins;
  }
}

export { CoinGeckoSDK }