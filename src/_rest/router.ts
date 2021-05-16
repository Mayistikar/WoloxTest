import express from 'express';

// Private
import { CoinRouter } from '../coin/infrastructure/coin_router';
import { UserRouter } from '../user/infrastructure/private_user_router';

// Public
import { AuthRouter } from '../user/infrastructure/auth_user_router';
import { PublicUserRouter } from '../user/infrastructure/public_user_router';

const Router = express.Router();

Router.use('/users', UserRouter);
Router.use('/coins', CoinRouter);

const PublicRouter = express.Router();
PublicRouter.use('/login', AuthRouter);
PublicRouter.use('/users', PublicUserRouter)

export { Router, PublicRouter }