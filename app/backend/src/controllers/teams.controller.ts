import { Request, Response } from 'express';

import { serviceGetAllTeams, serviceGetTeamById } from '../services/teams.service';

const controllerGetTeams = async (_req: Request, res: Response): Promise<Response> => {
  const { statusCode, message } = await serviceGetAllTeams();
  return res.status(statusCode).json(message);
};

const controllerGetTeamById = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const { statusCode, message } = await serviceGetTeamById(Number(id));
  return res.status(statusCode).json(message);
};

export {
  controllerGetTeams,
  controllerGetTeamById,
};
