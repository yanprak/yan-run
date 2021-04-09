import { Router } from 'express';
import appRoutes from './appRoutes';

const router: Router = Router();
appRoutes(router);

export default router;
