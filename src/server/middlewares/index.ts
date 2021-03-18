import cookieParserMiddleware from 'cookie-parser';
import { RequestHandler } from 'express';

const cookieParser: RequestHandler = cookieParserMiddleware('someSecret');

// eslint-disable-next-line import/prefer-default-export
export { cookieParser };
