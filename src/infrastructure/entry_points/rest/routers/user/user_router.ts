import express from 'express';
import { UserHandler } from '../../handlers/user/user_handler'

const UserRouter = express.Router()
const userHandler = new UserHandler();

UserRouter.get('', userHandler.FindAllUseCase.FindAll());

export { UserRouter }