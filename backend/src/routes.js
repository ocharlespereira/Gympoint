import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';

import UserController from './app/controllers/UserController';
import StudentController from './app/controllers/StudentController';
import FileController from './app/controllers/Filecontroller';
import PlanController from './app/controllers/PlanController';
import RegistrationController from './app/controllers/RegistrationController';
import CheckinController from './app/controllers/CheckinController';

import NotificationController from './app/controllers/NotificationController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

routes.get('/students', StudentController.index);
routes.post('/create', StudentController.store);
routes.put('/editStudents/:id', StudentController.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/plans', PlanController.index);
routes.post('/plans', PlanController.store);
routes.put('/plans/:id', PlanController.update);
routes.delete('/plans/:id', PlanController.delete);

routes.get('/registrations', RegistrationController.index);
routes.post('/registrations', RegistrationController.store);
routes.delete('/registrations/:id', RegistrationController.delete);

routes.get('/checkins', CheckinController.index);
routes.post('/checkins', CheckinController.store);

routes.get('/notifications', NotificationController.index);

export default routes;
