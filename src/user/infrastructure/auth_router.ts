import express from 'express';
import { LoginUserUseCase } from '../application/login_user_use_case';
import { FindUserTypeOrm } from './data_sources/database/typeorm/find_user_typeorm';

import { LoginUserHandler } from './entry_points/login_user_handler';

const AuthRouter = express.Router();

// Login
const findUserRepository = new FindUserTypeOrm();
const loginUserUseCase = new LoginUserUseCase(findUserRepository);
const loginAuthHandler = new LoginUserHandler(loginUserUseCase);
AuthRouter.post('', loginAuthHandler.Login);

export { AuthRouter }