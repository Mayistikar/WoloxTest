
import { NextFunction, Request, Response } from 'express';
import { DTOValidation } from '../../../_shared/security/dto_validator';

import { CreateUserUseCase } from '../../application/create_user_use_case';
import { UserDTO } from './dtos/user_dto';

class CreateUserHandler {
  CreateUserUseCase: CreateUserUseCase
  constructor(createUserUseCase: CreateUserUseCase) {
    this.CreateUserUseCase = createUserUseCase;
  }

  AddOne = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    try {
      const userDto = new UserDTO(req.body);

      const requestErrors = await DTOValidation(userDto);
      if (requestErrors.length) {
        return res.status(400).json({ code: '002', message: 'Bad Request', data: null, errors: requestErrors });
      }

      const data = await this.CreateUserUseCase.AddOne(userDto)
      
      return res.status(200).json({ code: null, message: null, data, errors: null });  
    } catch (error) {
      console.error({ error });
      next(error);
    }
    
  }
}

export { CreateUserHandler }