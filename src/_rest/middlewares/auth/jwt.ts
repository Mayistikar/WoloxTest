import { Request, Response, NextFunction } from 'express';

import { JWTValidate } from "../../../_shared/security/jwt"

const JWTAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const bearer = req.header('authorization');
    const token = bearer.split('Bearer ')[1];
    if (!token) throw new Error('Unauthorized');

    const isJwtValid = JWTValidate(token);
    if (!isJwtValid) throw new Error('Unauthorized');    

    next();
  } catch (error) {
    console.error({ error });
    return res.status(401).json({ code: '001', data: null, message: 'Unauthorized' })
  }
}

export { JWTAuth }