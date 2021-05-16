import express from 'express';

import { UserTypeormRepository } from './data_sources/database/typeorm/user_typeorm';
import { CurrencyTypeormRepository } from '../../currency/infrastructure/data_sources/database/typeorm/currency_typeorm';
import { CreateUserUseCase } from '../application/create_user_use_case';
import { CreateUserHandler } from './entry_points/create_user_handler';


const PublicUserRouter = express.Router();

// Create User
const userTypeormRepository = new UserTypeormRepository();
const currencyTypeormRepository = new CurrencyTypeormRepository();
const createUserUseCase = new CreateUserUseCase(userTypeormRepository, currencyTypeormRepository);
const createUserHandler = new CreateUserHandler(createUserUseCase);
PublicUserRouter.post('', createUserHandler.AddOne);

export { PublicUserRouter }