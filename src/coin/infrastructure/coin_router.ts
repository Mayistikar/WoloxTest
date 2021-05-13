import express, { Request, Response } from 'express';

const CoinRouter = express.Router();

CoinRouter.get('', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({ message: 'hello coins!' });
});

export { CoinRouter }