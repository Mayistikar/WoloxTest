import { Request, Response } from 'express';
import { CreateUserUseCase } from '../../application/create_user_use_case';

class CreateUserHandler {
  CreateUserUseCase: CreateUserUseCase
  constructor(createUserUseCase: CreateUserUseCase) {
    this.CreateUserUseCase = createUserUseCase;
  }

  AddOne = async (req: Request, res: Response): Promise<Response> => {
    const data = await this.CreateUserUseCase.AddOne({ user: "userdto" })
    return res.status(200).json({ code: null, message: null, data });
  }
}

export { CreateUserHandler }