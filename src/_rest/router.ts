import express from 'express';

import { CoinRouter } from '../coin/infrastructure/coin_router';
import { UserRouter } from '../user/infrastructure/user_router'

const Router = express.Router();

Router.use('/users', UserRouter);
Router.use('/coins', CoinRouter);

export { Router }