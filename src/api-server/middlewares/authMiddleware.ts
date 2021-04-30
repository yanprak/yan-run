import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  const isOptions = req.method.toLowerCase() === 'options';

  if (isOptions) {
    res.status(204).send('');
  } else {
    const cookie = req.header('Cookie');
    if (cookie) {
      const parsedCookiesKeys = cookie.split(';').map(item => item.trim().split('=')[0]);
      const authorized = parsedCookiesKeys.includes('uuid') && parsedCookiesKeys.includes('authCookie');
      if (authorized) {
        next();
      } else {
        res.status(401).json({ message: 'Cookie is not valid' });
      }
    } else {
      res.status(401).json({ message: 'Cookie is not valid' });
    }
  }
};
