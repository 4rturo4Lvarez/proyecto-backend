import express from 'express';

import usersRoutes from './rutas/rutas';

const app = express();

app.use(express.json());

app.use(usersRoutes);

export default app;