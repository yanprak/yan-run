import { Router } from 'express';

import forumRoutes from './forumRoutes';
import feedbackRoutes from './feedbackRoutes';
import themeRoutes from './themeRoutes';

const router: Router = Router();

forumRoutes(router);
feedbackRoutes(router);
themeRoutes(router);

export default router;
