import express from 'express';

import { UserTypeOrm } from './data_sources/database/typeorm/user_typeorm_imp';
import { FindUserUseCase } from '../application/find_user_use_case';
import { UserHandler } from './entry_points/user_handler';

const UserRouter = express.Router();

const userTypeOrm = new UserTypeOrm();

// Find User
const findUserUseCase = new FindUserUseCase(userTypeOrm);
const findUserHandler = new UserHandler(findUserUseCase);
UserRouter.get('', findUserHandler.FindAll);


export { UserRouter }