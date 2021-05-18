import { Request, Response, NextFunction } from "express";
import { JWTGet } from "../../../_shared/security/jwt";
import { AddCoinUseCase } from '../../application/add_coin_use_case';

class AddCoinHandler {

  AddCoinUseCase: AddCoinUseCase;
  
  constructor(addCoinUseCase: AddCoinUseCase) {
    this.AddCoinUseCase = addCoinUseCase;
  }

  AddCoin = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.get('authorization');
      const jwt = JWTGet(token);
      const userID = jwt.sub;

      const { coinUIID } = req.body;
      if (!coinUIID || coinUIID === '') {
        return res.status(400).json({ code: '001', message: 'Bad Request', data: null, errors: [`Coin UIID doesn't exist`] });
      }

      const data = await this.AddCoinUseCase.AddCoin(coinUIID, userID);
      return res.status(200).json({ code: null, message: 'Success', data, errors: [] });
    } catch (error) {
      console.error({ error });
      next(error);
    }
  }
}

export { AddCoinHandler }