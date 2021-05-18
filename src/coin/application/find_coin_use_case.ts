import { response } from "express";
import { Currency } from "../../currency/domain/models/currency";
import { CurrencyRepository } from "../../currency/domain/repositories/currency_repository";
import { UserRepository } from "../../user/domain/repositories/user_repository";
import { Coin } from "../domain/models/coin";
import { CoinRepository } from "../domain/repositories/coin_repository";

class FindCoinUseCase {
  CoinRepository: CoinRepository;
  UserRepository: UserRepository;
  CurrencyRepository: CurrencyRepository;

  constructor(
    coinRepository: CoinRepository,
    userRepository: UserRepository,
    currencyRepository: CurrencyRepository
  ) {
    this.CoinRepository = coinRepository;
    this.UserRepository = userRepository;
    this.CurrencyRepository = currencyRepository;
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

  async FindTop(userId: number, ascOrder: boolean): Promise<any> {
    try {
      const isAvailable = await this.CoinRepository.Ping();
      if (!isAvailable) throw new Error('Coin Gecko Api is unavailable');

      const user = await this.UserRepository.FindById(userId);
      if (!user) throw new Error(`UserId: ${userId} unavailable`);

      const currencies = await this.CurrencyRepository.FindAll();
      const coinUIIDS = user.Coins.map(coin => coin.UIID);

      const cryptosFavoriteCurrency = await this.CoinRepository.FindByUIIDs(coinUIIDS, user.Currency);
      const cryptosMap = new Map();
      cryptosFavoriteCurrency.forEach(crypto => {
        const cryptoDTO = { Symbol: crypto.symbol, Name: crypto.name, Image: crypto.image, UpdatedAt: crypto.last_updated };
        cryptoDTO[user.Currency] = crypto.current_price;
        cryptosMap.set(crypto.id, cryptoDTO);
      });

      await Promise.all(
        currencies.map(async currency => {
          if (currency.Name !== user.Currency) {
            const otherCurrencyCryptos = await this.CoinRepository.FindByUIIDs(coinUIIDS, currency.Name);

            otherCurrencyCryptos.forEach(otherCurrencyCrypto => {
              const favoriteCrypto = cryptosMap.get(otherCurrencyCrypto.id);
              if (!!favoriteCrypto) {
                favoriteCrypto[currency.Name] = otherCurrencyCrypto.current_price
              }
            });
          }
        })
      );

      const userTopCryptos = Array.from(cryptosMap.values());
      return userTopCryptos.sort((a, b) => {
        if (ascOrder) return a[user.Currency] - b[user.Currency];
        return b[user.Currency] - a[user.Currency];
      });
    } catch (error) {
      console.error({ error });
      throw error;
    }
  }
}

export { FindCoinUseCase }