import { Router } from 'express';

import SessionController from './app/controllers/SessionController';

import UserController from './app/controllers/UserController';
import StudentController from './app/controllers/StudentController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/users', UserController.store);
routes.put('/users', UserController.update);
routes.post('/create', StudentController.store);
routes.put('/editStudents/:id', StudentController.update);

export default routes;
