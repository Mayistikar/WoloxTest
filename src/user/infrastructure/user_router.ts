import express from 'express';

import { FindUserTypeOrm } from './data_sources/database/typeorm/find_user_typeorm';
import { FindUserUseCase } from '../application/find_user_use_case';
import { FindUserHandler } from './entry_points/find_user_handler';

import { CreateUserTypeorm } from './data_sources/database/typeorm/create_user_typeorm';
import { CreateUserUseCase } from '../application/create_user_use_case';
import { CreateUserHandler } from './entry_points/create_user_handler';

const UserRouter = express.Router();

// Find User
const findUserTypeorm = new FindUserTypeOrm();
const findUserUseCase = new FindUserUseCase(findUserTypeorm);
const findUserHandler = new FindUserHandler(findUserUseCase);
UserRouter.get('', findUserHandler.FindAll);

// Create User
const createUserTypeOrm = new CreateUserTypeorm();
const createUserUseCase = new CreateUserUseCase(createUserTypeOrm);
const createUserHandler = new CreateUserHandler(createUserUseCase);
UserRouter.post('', createUserHandler.AddOne);

export { UserRouter }