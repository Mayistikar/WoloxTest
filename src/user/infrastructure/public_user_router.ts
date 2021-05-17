import express from 'express';

import { UserTypeormRepository } from './data_sources/database/typeorm/user_typeorm';
import { CurrencyMockRepository } from '../../currency/infrastructure/data_sources/mock/currency_mock';
import { CreateUserUseCase } from '../application/create_user_use_case';
import { CreateUserHandler } from './entry_points/create_user_handler';


const PublicUserRouter = express.Router();

// Create User
const userTypeormRepository = new UserTypeormRepository();
const currencyTypeormRepository = new CurrencyMockRepository();
const createUserUseCase = new CreateUserUseCase(userTypeormRepository, currencyTypeormRepository);
const createUserHandler = new CreateUserHandler(createUserUseCase);
PublicUserRouter.post('', createUserHandler.AddOne);

export { PublicUserRouter }