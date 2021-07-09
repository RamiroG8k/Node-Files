// Common
import express from 'express';
// Routes
import imgRoutes from './img.routes';

const routes = express();

routes.use('/upload', imgRoutes);

export default routes;