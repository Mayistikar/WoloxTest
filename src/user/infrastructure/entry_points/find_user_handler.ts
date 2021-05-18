import { Request, Response } from 'express';

import { FindUserUseCase } from '../../application/find_user_use_case';

class FindUserHandler {
  FindUserUseCase: FindUserUseCase

  constructor(findUserUseCase: FindUserUseCase) {
    this.FindUserUseCase = findUserUseCase;
  }

  FindAll = async (req: Request, res: Response): Promise<Response> => {
    const users = this.FindUserUseCase.FindAll();
    return res.status(200).json(users);
  }
}

export { FindUserHandler }