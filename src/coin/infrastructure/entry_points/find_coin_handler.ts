import { Request, Response, NextFunction } from "express";
import { JWTGet } from "../../../_shared/security/jwt";
import { FindCoinUseCase } from "../../application/find_coin_use_case";
import { Coin } from "../../domain/models/coin";

class FindCoinHandler {
  
  FindCoinUseCase: FindCoinUseCase;

  constructor(findCoinUseCase: FindCoinUseCase) {
    this.FindCoinUseCase = findCoinUseCase;
  }

  FindAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.header('authorization');
      const jwt = JWTGet(token);
      const coins = await this.FindCoinUseCase.FindAllUserCurrency(jwt.sub);
      return res.status(200).json({ code: null, message: 'Success', data: coins, errors: [] })
    } catch (error) {
      console.error({ error });
      next(error);
    }
    
  }
}

export { FindCoinHandler }