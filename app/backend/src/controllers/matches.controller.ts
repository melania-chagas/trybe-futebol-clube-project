import { Request, Response } from 'express';
import { IResult } from '../interfaces/IResult';
import { verifyToken } from '../auth/JWT';
import {
  serviceGetAllInProgress,
  serviceGetAllMatchesNoFilter,
  serviceSaveMatches,
  serviceUpdateProgress,
} from '../services/maches.service';

const controllerGetAllMatchesNoFilter = async (_req: Request, res: Response): Promise<Response> => {
  const { statusCode, message } = await serviceGetAllMatchesNoFilter();
  return res.status(statusCode).json(message);
};

const controllerGetAllInProgress = async (req: Request, res: Response): Promise<Response> => {
  const { statusCode, message } = await serviceGetAllInProgress(req.query.inProgress as string);
  return res.status(statusCode).json(message);
};

const controllerGetAllMatches = async (req: Request, res: Response) => {
  const { inProgress } = req.query;
  if (inProgress) {
    return controllerGetAllInProgress(req, res);
  }
  return controllerGetAllMatchesNoFilter(req, res);
};

const controllerSaveMatches = async (req: Request, res: Response) => {
  const newMatch = req.body;
  const { authorization } = req.headers;
  if (authorization) {
    verifyToken(authorization);
  }

  const { statusCode, message } = await serviceSaveMatches(newMatch);
  return res.status(statusCode).json(message);
};

const controllerUpdateProgress = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const { statusCode, message } = await serviceUpdateProgress(Number(id)) as IResult;

  return res.status(statusCode).json({ message });
};

export {
  controllerGetAllMatches,
  controllerGetAllInProgress,
  controllerSaveMatches,
  controllerUpdateProgress,
};
