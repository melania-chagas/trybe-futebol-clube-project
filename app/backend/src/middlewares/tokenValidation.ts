import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../auth/JWT';

const tokenValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  let statusToken;

  if (authorization) {
    statusToken = verifyToken(authorization);
  }

  if (!statusToken) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }

  next();
};

export default tokenValidation;
