import express from 'express';

import { UserTypeOrm } from './data_sources/database/user_typeorm';
import { FindUserUseCase } from '../application/find_user_use_case';
import { UserHandler } from './entry_points/user_handler';

const UserRouter = express.Router();

const userTypeOrm = new UserTypeOrm();
const findUserUseCase = new FindUserUseCase(userTypeOrm);
const userHandler = new UserHandler(findUserUseCase);

UserRouter.get('', userHandler.FindAll);

export { UserRouter }