import express from 'express';
import { UserTypeormRepository } from '../../user/infrastructure/data_sources/database/typeorm/user_typeorm';
import { AddCoinUseCase } from '../application/add_coin_use_case';
import { FindCoinUseCase } from '../application/find_coin_use_case';
import { CoinImpRepository } from './data_source/coin_imp_repository';
import { AddCoinHandler } from './entry_points/add_coin_handler';
import { FindCoinHandler } from './entry_points/find_coin_handler';

const PrivateCoinRouter = express.Router();

const coinImpRepository = new CoinImpRepository();
const userTypeormRepository = new UserTypeormRepository();

// Find All Coins
const findCoinUseCase = new FindCoinUseCase(coinImpRepository, userTypeormRepository);
const findCoinHandler = new FindCoinHandler(findCoinUseCase);
PrivateCoinRouter.get('', findCoinHandler.FindAll);

// Add Coin
const addCoinUseCase = new AddCoinUseCase(coinImpRepository, userTypeormRepository)
const addCoinHandler = new AddCoinHandler(addCoinUseCase);
PrivateCoinRouter.post('', addCoinHandler.AddCoin);

export { PrivateCoinRouter }