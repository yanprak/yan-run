import { Router } from 'express';
import forumRoutes from './forumRoutes';
import feedbackRoutes from './feedbackRoutes';
import themeRoutes from './themeRoutes';

const apiRouter: Router = Router();

forumRoutes(apiRouter);
feedbackRoutes(apiRouter);
themeRoutes(apiRouter);

export default apiRouter;
