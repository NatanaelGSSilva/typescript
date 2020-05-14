import { Router } from 'express';
import productRouter from './product.routes';

const routes = Router();

routes.use('/products', productRouter);// tem todas as rotas
// routes.use('/users', userRoutes)

export default routes;
