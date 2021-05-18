import { Request, Response, NextFunction } from "express";
import { JWTGet } from "../../../_shared/security/jwt";
import { FindCoinUseCase } from "../../application/find_coin_use_case";

class FindCoinHandler {
  
  FindCoinUseCase: FindCoinUseCase;

  constructor(findCoinUseCase: FindCoinUseCase) {
    this.FindCoinUseCase = findCoinUseCase;
  }

  FindAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.header('authorization');
      const { page } = req.query;      
      const jwt = JWTGet(token);
      const coins = await this.FindCoinUseCase.FindAllUserCurrency(jwt.sub, { page: page.toString() });
      return res.status(200).json({ code: null, message: 'Success', data: coins, errors: [] })
    } catch (error) {
      console.error({ error });
      next(error);
    }
  }

  FindTop = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.header('authorization');      
      const jwt = JWTGet(token);

      const { order } = req.query;

      const ascOrder = (!!order && order.toString().toLocaleLowerCase() === 'asc');

      const coins = await this.FindCoinUseCase.FindTop(jwt.sub, ascOrder);
      return res.status(200).json({ code: null, message: 'Success', data: coins, errors: [] })
    } catch (error) {
      console.error({ error });
      next(error);      
    }
  }
}

export { FindCoinHandler }