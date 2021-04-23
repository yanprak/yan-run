import { Request, Response, NextFunction } from 'express';

const { WEB_HOST = '' } = process.env;

export default (req: Request, res: Response, next: NextFunction) => {
  res.header(
    'Access-Control-Allow-Origin',
    `${WEB_HOST}`,
  ); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
};
