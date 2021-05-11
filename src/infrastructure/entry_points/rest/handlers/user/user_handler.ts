import { Request, Response } from 'express';

import { FindAllUseCase } from "../../../../../domain/use_case/user/find_all_use_case";

class UserHandler {
  FindAllUseCase: FindAllUseCase

  constructor(findAllUseCase: FindAllUseCase) {
    this.FindAllUseCase = findAllUseCase;
  }

  FindAll = async (req: Request, res: Response): Promise<Response> => {
    const users = this.FindAllUseCase.FindAll();
    return res.status(200).json(users);
  }
}

export { UserHandler }