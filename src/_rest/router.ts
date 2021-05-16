import express from 'express';

// Private
import { PrivateCoinRouter } from '../coin/infrastructure/private_coin_router';
import { PrivateUserRouter } from '../user/infrastructure/private_user_router';

// Public
import { AuthRouter } from '../user/infrastructure/auth_user_router';
import { PublicUserRouter } from '../user/infrastructure/public_user_router';

const Router = express.Router();

Router.use('/users', PrivateUserRouter);
Router.use('/coins', PrivateCoinRouter);

const PublicRouter = express.Router();
PublicRouter.use('/login', AuthRouter);
PublicRouter.use('/users', PublicUserRouter)

export { Router, PublicRouter }