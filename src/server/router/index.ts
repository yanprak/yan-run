import { Router } from 'express';
import appRoutes from './app';

const router: Router = Router();

appRoutes(router);

export default router;
