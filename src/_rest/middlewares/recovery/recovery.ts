import { Request, Response, NextFunction } from 'express';

const Recovery = (error: Error, req: Request, res: Response, next: NextFunction ) => {
  return res.status(500).json({ code: '000', data: null, message: error.message });
}

export { Recovery }