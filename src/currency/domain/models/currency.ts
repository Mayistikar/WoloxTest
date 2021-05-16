class Currency {
  Name: string;
  Description: string;
  constructor() {}
}

class CurrencyBuilder {
  private readonly _currency: Currency;

  constructor() {
    this._currency.Name = 'usd';
    this._currency.Description = '';
  }

  Name(name: string): CurrencyBuilder {
    if (name == '') throw new Error('Invalid Currency Build, Name empty');
    this._currency.Name = name;
    return this;
  }

  Description(description: string): CurrencyBuilder {
    this._currency.Description = description;
    return this;
  }

  Build(): Currency {
    return this._currency;
  }
}

export { Currency, CurrencyBuilder }