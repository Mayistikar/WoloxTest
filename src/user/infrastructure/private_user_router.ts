import express from 'express';

import { UserTypeormRepository } from './data_sources/database/typeorm/user_typeorm';
import { FindUserUseCase } from '../application/find_user_use_case';
import { FindUserHandler } from './entry_points/find_user_handler';

const UserRouter = express.Router();

// Find User
const userTypeormRepository = new UserTypeormRepository();
const findUserUseCase = new FindUserUseCase(userTypeormRepository);
const findUserHandler = new FindUserHandler(findUserUseCase);
UserRouter.get('', findUserHandler.FindAll);

export { UserRouter }