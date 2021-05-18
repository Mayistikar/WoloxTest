import { Request, Response, NextFunction } from 'express';
import { LoginUserUseCase } from '../../application/login_user_use_case';

class LoginUserHandler {

  LoginUserUseCase: LoginUserUseCase;  
  constructor(loginUserUseCase: LoginUserUseCase) {
    this.LoginUserUseCase = loginUserUseCase;
  }

  Login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authorization = req.header('authorization');
      if (!authorization) return res.status(401).json();
      const token = await this.LoginUserUseCase.Login(authorization);
      return res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }
}

export { LoginUserHandler }