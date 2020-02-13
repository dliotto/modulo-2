import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserControllers from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';
import AvailableController from './app/controllers/AvailableController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

/**Create Usuários**/
routes.post('/users', UserControllers.store);
/**Iniciar sessão**/
routes.post('/sessions', SessionController.store);

/**Middleware para validação de token de usuário**/
routes.use(authMiddleware);
/**Update Usuários**/
routes.put('/users', UserControllers.update);

routes.get('/providers', ProviderController.index);
routes.get('/providers/:providerId/available', AvailableController.index);

routes.post('/files', upload.single('file'), FileController.store);

/**Create Appointment**/
routes.post('/appointments', AppointmentController.store);
routes.get('/appointments', AppointmentController.index);
routes.delete('/appointments/:id', AppointmentController.delete);

//listar notificações
routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

routes.get('/schedule', ScheduleController.index);

//pode utilizar tambem export default routes;
//module.exports = routes;
export default routes;
