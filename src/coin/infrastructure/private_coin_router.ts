import express, { Request, Response } from 'express';
import { UserTypeormRepository } from '../../user/infrastructure/data_sources/database/typeorm/user_typeorm';
import { FindCoinUseCase } from '../application/find_coin_use_case';
import { CoinGeckoSDK } from './data_source/sdk/coin_gecko/coin_gecko';
import { FindCoinHandler } from './entry_points/find_coin_handler';

const PrivateCoinRouter = express.Router();

// Find All Coins
const coinGeckoRepository = new CoinGeckoSDK();
const userRepository = new UserTypeormRepository();
const findCoinUseCase = new FindCoinUseCase(coinGeckoRepository, userRepository);
const findCoinHandler = new FindCoinHandler(findCoinUseCase);
PrivateCoinRouter.get('', findCoinHandler.FindAll);

export { PrivateCoinRouter }