import { Request, Response, NextFunction } from 'express';

import { JWTOutOfDate, JWTValidate } from "../../../_shared/security/jwt"

const JWTAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const bearer = req.header('authorization');
    if (!bearer) throw new Error('Unahutorized');
    
    const token = bearer.split('Bearer ')[1];
    if (!token) throw new Error('Unauthorized');

    const isJwtValid = JWTValidate(token);
    if (!isJwtValid) throw new Error('Unauthorized');    

    const isJWTOutOfDate = JWTOutOfDate(token);
    if (!isJWTOutOfDate) throw new Error('Unauthorized, session ended');

    next();
  } catch (error) {
    console.error({ error });
    return res.status(401).json({ code: '001', data: null, message: error.message, errors: [error.message] })
  }
}

export { JWTAuth }