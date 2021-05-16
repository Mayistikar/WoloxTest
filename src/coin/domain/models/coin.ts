import { CoinGateway } from "./gateways/coin_gateway"

class Coin implements CoinGateway {
  Symbol: string
  Price: string
  Name: string
  Image: string
  UpdatedAt: string
}

class CoinBuilder {
  private readonly _coin: Coin;
  constructor() {
    this._coin.Symbol = '';
    this._coin.Price = '';
    this._coin.Name = '';
    this._coin.Image = '';
    this._coin.UpdatedAt = '';
  }

  Symbol(Symbol: string): CoinBuilder {
    this._coin.Symbol = Symbol;
    return this;
  }

  Price(Price: string): CoinBuilder {
    this._coin.Price = Price;
    return this;
  }

  Name(Name: string): CoinBuilder {
    this._coin.Name = Name;
    return this;
  }

  Image(Image: string): CoinBuilder {
    this._coin.Image = Image;
    return this;
  }

  UpdatedAt(UpdatedAt: string): CoinBuilder {
    this._coin.UpdatedAt = UpdatedAt;
    return this;
  }

  Build(): Coin {
    return this._coin;
  }

}

export { Coin, CoinBuilder }