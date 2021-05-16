import express from 'express';
import { LoginUserUseCase } from '../application/login_user_use_case';
import { UserTypeormRepository } from './data_sources/database/typeorm/user_typeorm';

import { LoginUserHandler } from './entry_points/login_user_handler';

const AuthRouter = express.Router();

// Login
const userTypeormRepository = new UserTypeormRepository();
const loginUserUseCase = new LoginUserUseCase(userTypeormRepository);
const loginAuthHandler = new LoginUserHandler(loginUserUseCase);
AuthRouter.post('', loginAuthHandler.Login);

export { AuthRouter }