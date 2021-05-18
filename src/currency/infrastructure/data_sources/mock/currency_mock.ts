import { CurrencyGateway } from "../../../domain/models/gateways/currency_gateway";

const CurrencyDataMock = new Map();
CurrencyDataMock.set('usd', { Name: 'usd', Description: 'Dollar' });
CurrencyDataMock.set('eur', { Name: 'eur', Description: 'Euro' });
CurrencyDataMock.set('ars', { Name: 'ars', Description: 'Peso Argentino' });

class CurrencyMockRepository {

  constructor(){}

  async FindOne(Name: string): Promise<CurrencyGateway> {
    return CurrencyDataMock.get(Name);
  }

  async FindAll(): Promise<CurrencyGateway[]> {
    return Array.from(CurrencyDataMock.values());
  }

}

export { CurrencyMockRepository}