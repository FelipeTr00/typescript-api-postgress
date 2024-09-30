import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = Router();

// Rotas para usuários
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/', (req, res) => {
  res.json('Hello, World!');
});

export default routes;
