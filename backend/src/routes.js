import { Router } from 'express';

import SessionController from './app/controllers/SessionController';

import UserController from './app/controllers/UserController';
import StudentController from './app/controllers/StudentController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);
routes.post('/create', StudentController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;