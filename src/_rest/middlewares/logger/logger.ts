import { Request, Response } from 'express';

const Logger = (req: Request, res: Response) => {
  console.log({ req });
}

export { Logger }