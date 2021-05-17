import express from 'express';

import { UserTypeormRepository } from './data_sources/database/typeorm/user_typeorm';
import { FindUserUseCase } from '../application/find_user_use_case';
import { FindUserHandler } from './entry_points/find_user_handler';
import { CoinGeckoSDK } from '../../coin/infrastructure/data_source/sdk/coin_gecko/coin_gecko';

const PrivateUserRouter = express.Router();

const userTypeormRepository = new UserTypeormRepository();

// Find User
const findUserUseCase = new FindUserUseCase(userTypeormRepository);
const findUserHandler = new FindUserHandler(findUserUseCase);
PrivateUserRouter.get('', findUserHandler.FindAll);

export { PrivateUserRouter }