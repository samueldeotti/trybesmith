import express from 'express';
import * as routers from './routes';

const app = express();

app.use(express.json());

app.use('/products', routers.productsRouter);
app.use('/orders', routers.ordersRouter);
app.use('/login', routers.usersRouter);

export default app;
