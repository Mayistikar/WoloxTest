import express from 'express';

import { FindUserTypeOrm } from './data_sources/database/typeorm/find_user_typeorm';
import { FindUserUseCase } from '../application/find_user_use_case';
import { FindUserHandler } from './entry_points/find_user_handler';

import { CreateUserTypeOrm } from './data_sources/database/typeorm/create_user_typeorm';
import { CreateUserHandler } from './entry_points/create_user_handler';
import { CreateUserUseCase } from '../application/create_user_use_case';

const UserRouter = express.Router();

// Find User
const findUserTypeOrm = new FindUserTypeOrm();
const findUserUseCase = new FindUserUseCase(findUserTypeOrm);
const findUserHandler = new FindUserHandler(findUserUseCase);
UserRouter.get('', findUserHandler.FindAll);

// Create User
const createUserTypeOrm = new CreateUserTypeOrm();
const createUserUseCase = new CreateUserUseCase(createUserTypeOrm);
const createUserHandler = new CreateUserHandler(createUserUseCase);
UserRouter.post('', createUserHandler.AddOne);

export { UserRouter }