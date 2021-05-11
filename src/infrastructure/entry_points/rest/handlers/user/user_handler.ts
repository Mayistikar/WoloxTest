import { Request, Response } from 'express';

import { FindAllUseCase } from "../../../../../domain/use_case/user/find_all_use_case";

class UserHandler {
  FindAllUseCase: FindAllUseCase

  constructor(findAllUseCase: FindAllUseCase) {
    this.FindAllUseCase = findAllUseCase;
  }

  async FindAll(req: Request, res: Response): Promise<Response>{
    return res.status(200).json({ message: 'hello user' });
  }
}

export { UserHandler }