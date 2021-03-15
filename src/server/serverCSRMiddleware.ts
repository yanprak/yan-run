import { Request, Response } from 'express';
import path from 'path';

export default (req: Request, res: Response) => {
  res.header('Content-Type', 'text/html');
  res.status(200).sendFile(path.join(__dirname, '..', 'src', 'client', 'index.html'));
};
