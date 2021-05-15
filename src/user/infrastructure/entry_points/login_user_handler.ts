import { Request, Response, NextFunction } from 'express';
import { nextTick } from 'process';
import { LoginUserUseCase } from '../../application/login_user_use_case';

class LoginUserHandler {

  LoginUserUseCase: LoginUserUseCase;  
  constructor(loginUserUseCase: LoginUserUseCase) {
    this.LoginUserUseCase = loginUserUseCase;
  }

  Login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authorization = req.header('authorization');
      const data = await this.LoginUserUseCase.Login(authorization);
      return res.status(200).json({ data }); 
    } catch (error) {
      next(error);
    }
  }
}

export { LoginUserHandler }