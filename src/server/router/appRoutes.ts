import { ErrorRequestHandler, RequestHandler, Router } from 'express';
import { cookieParser } from '../middlewares';
import routes from '../../client/routes/routes';
import serverRenderMiddleware from '../middlewares/serverRenderMiddleware';
import serverCSRMiddleware from '../middlewares/serverCSRMiddleware';

const allRoutes = routes.map(routeObj => routeObj.path);

const middlewares: Array<RequestHandler | ErrorRequestHandler> = [
  cookieParser,
];

const IS_SSR = process.env.SR === 'server';
const renderApp = IS_SSR ? serverRenderMiddleware : serverCSRMiddleware;

export default function appRoutes(router: Router) {
  router.get(allRoutes, middlewares, renderApp);
}
