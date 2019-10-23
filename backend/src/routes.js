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

// import NotificationController from './app/controllers/NotificationController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/students/:studentId/checkins', CheckinController.index);
routes.post('/students/:studentId/checkins', CheckinController.store);

// Account
routes.post('/sessions', SessionController.store);

/**
 * Private routes (need jwt)
 */
routes.use(authMiddleware);

// User
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

// Student
routes.get('/students', StudentController.index);
routes.post('/create', StudentController.store);
routes.put('/editStudents/:id', StudentController.update);

// File Image
routes.post('/files', upload.single('file'), FileController.store);

// Plans
routes.get('/plans', PlanController.index);
routes.post('/plans', PlanController.store);
routes.put('/plans/:id', PlanController.update);
routes.delete('/plans/:id', PlanController.delete);

// Registration
routes.get('/registrations', RegistrationController.index);
routes.post('/registrations', RegistrationController.store);
routes.delete('/registrations/:id', RegistrationController.delete);

export default routes;
