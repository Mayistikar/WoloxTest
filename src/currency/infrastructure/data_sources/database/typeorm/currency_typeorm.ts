import { getRepository } from "typeorm";
import { CurrencyTypeorm } from "./entities/currency_typeorm_entity";

class CurrencyTypeormRepository {

  CurrencyTypeormRepository: CurrencyTypeormRepository;

  constructor(){}

  async FindOne(Name: string): Promise<CurrencyTypeorm> {
    return await getRepository(CurrencyTypeorm).findOne({ Name });
  }

  async FindAll(): Promise<CurrencyTypeorm[]> {
    return getRepository(CurrencyTypeorm).find();
  }

}

export { CurrencyTypeormRepository}