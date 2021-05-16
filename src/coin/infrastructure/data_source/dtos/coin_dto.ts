import { CoinGateway } from "../../../domain/models/gateways/coin_gateway";

class CoinDTO implements CoinGateway {
  Image: string;
  Name: string;
  Price: string;
  Symbol: string;
  UpdatedAt: string;
  tesxt: string;
}

class CoinDTOBuilder {
  private readonly _coinDTO: CoinDTO = new CoinDTO();

  constructor() {
    this._coinDTO.Image = '';
    this._coinDTO.Name = '';
    this._coinDTO.Price = '';
    this._coinDTO.Symbol = '';
    this._coinDTO.UpdatedAt = '';
  }

  Image(Image: string): CoinDTOBuilder {
    this._coinDTO.Image = Image;
    return this;
  }

  Name(Name: string): CoinDTOBuilder {
    this._coinDTO.Name = Name;
    return this;
  }

  Price(Price: string): CoinDTOBuilder {
    this._coinDTO.Price = Price;
    return this;
  }

  Symbol(Symbol: string): CoinDTOBuilder {
    this._coinDTO.Symbol = Symbol;
    return this;
  }

  UpdatedAt(UpdatedAt: string): CoinDTOBuilder {
    this._coinDTO.UpdatedAt = UpdatedAt;
    return this;
  }
 
  Build(): CoinDTO {
    return this._coinDTO;
  }
}

export { CoinDTO, CoinDTOBuilder }