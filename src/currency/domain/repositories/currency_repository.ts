import { Currency } from "../models/currency";

interface CurrencyRepository {
  FindOne(name: string): Promise<Currency>;
  FindAll(): Promise<Currency[]>;
}

export { CurrencyRepository }