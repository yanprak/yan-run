import { Router } from 'express';
import forumRoutes from './forumRoutes';
import feedbackRoutes from './feedbackRoutes';
import themeRoutes from './themeRoutes';
import userRoutes from './userRoutes';

const apiRouter: Router = Router();

forumRoutes(apiRouter);
feedbackRoutes(apiRouter);
themeRoutes(apiRouter);
userRoutes(apiRouter);

export default apiRouter;
