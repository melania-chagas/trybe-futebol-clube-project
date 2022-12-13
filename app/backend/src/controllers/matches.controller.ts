import { Request, Response } from 'express';
import serviceGetAllMatches from '../services/maches.service';

const controllerGetAllMatches = async (_req: Request, res: Response): Promise<Response> => {
  const { statusCode, message } = await serviceGetAllMatches();
  return res.status(statusCode).json(message);
};

export default controllerGetAllMatches;
