import { Router } from 'express';

import forumRoutes from './forumRoutes';
import feedbackRoutes from './feedbackRoutes';

const router: Router = Router();

forumRoutes(router);
feedbackRoutes(router);

export default router;
