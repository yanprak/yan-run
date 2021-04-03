import { Router } from 'express';

import feedbackRoutes from './feedbackRoutes';

const router: Router = Router();

feedbackRoutes(router);

export default router;
