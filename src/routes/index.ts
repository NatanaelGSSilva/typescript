import { Router } from 'express';
import productRouter from './product.routes';
import userRouter from './userRoutes';

const routes = Router();

routes.use('/products', productRouter);// tem todas as rotas
routes.use('/users', userRouter);


export default routes;
