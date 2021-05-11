import express from 'express';
import { UserHandler } from '../../handlers/user/user_handler'
import { FindAllUseCase } from '../../../../../domain/use_case/user/find_all_use_case'
import { UserRepository } from '../../../../driven_adapters/repositories/user/user_repository'
import { UserDatabaseImpl } from '../../../../driven_adapters/implementations/user_database/user_database_impl'

const UserRouter = express.Router()

const userDatabaseImpl = new UserDatabaseImpl();
const userRepository = new UserRepository(userDatabaseImpl);
const findAllUseCase = new FindAllUseCase(userRepository);
const userHandler = new UserHandler(findAllUseCase);

UserRouter.get('', userHandler.FindAll);

export { UserRouter }