import { CurrencyMockRepository } from '../../../../../currency/infrastructure/data_sources/mock/currency_mock';
import { CoinDTO, CoinDTOBuilder } from '../../dtos/coin_dto';

const CoinGecko = require('coingecko-api');

class CoinGeckoSDK {
  CoinGeckoClient: any;
  CurrencyMockRepository: CurrencyMockRepository;

  constructor() {
    this.CoinGeckoClient = new CoinGecko();
    this.CurrencyMockRepository = new CurrencyMockRepository();
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

  async FindAllUserCurrency(currency: string, filters: any): Promise<CoinDTO[]> {        
    const response = await this.CoinGeckoClient.coins.markets({ per_page: 250, vs_currency: currency, page: filters.page });
    const coins = response?.data.map(coin => {
      const coinDTOBuilder = new CoinDTOBuilder();
      return coinDTOBuilder
        .UIID(coin.id)
        .Image(coin.image?.small)
        .Name(coin.name)
        .Price(coin.current_price)
        .Symbol(coin.symbol)
        .UpdatedAt(coin.last_updated)
        .Build();
    });
    return coins;
  }

  async FindByID(coinID: string): Promise<CoinDTO> {
    const response = await this.CoinGeckoClient.coins.fetch(coinID, {});
    if (!response.success) return null;

    const coinDTOBuilder = new CoinDTOBuilder();
    const coinDTO = coinDTOBuilder
      .UIID(response.data?.id)
      .Name(response.data?.name)
      .Image(response.data?.image?.small)
      .Price(response.data?.market_data?.current_price?.usd)
      .Symbol(response.data?.symbol)
      .UpdatedAt(response.data?.last_updated)
      .MarketPlace(response.data?.market_data)
      .Build();

    return coinDTO;
  }

  async FindByUIIDs(coinIDs: string[], currency: string, ): Promise<any[]> {    
    const response = await this.CoinGeckoClient.coins.markets({ per_page: 250, vs_currency: currency, ids: coinIDs });
    if (!response.success) return [];
    return response.data;
  }
}

export { CoinGeckoSDK }