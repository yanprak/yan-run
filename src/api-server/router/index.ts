import { Router } from 'express';

import forumRoutes from './forumRoutes';

const router: Router = Router();

forumRoutes(router);

export default router;
