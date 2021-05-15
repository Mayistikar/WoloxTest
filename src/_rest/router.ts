import express from 'express';

import { CoinRouter } from '../coin/infrastructure/coin_router';
import { UserRouter } from '../user/infrastructure/user_router';
import { AuthRouter } from '../user/infrastructure/auth_router';

const Router = express.Router();

Router.use('/users', UserRouter);
Router.use('/coins', CoinRouter);

const PublicRouter = express.Router();
PublicRouter.use('/login', AuthRouter);

export { Router, PublicRouter }