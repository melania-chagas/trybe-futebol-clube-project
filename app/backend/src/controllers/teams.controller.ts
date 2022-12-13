import { Request, Response } from 'express';

import serviceGetAllTeams from '../services/teams.service';

const controllerGetTeams = async (_req: Request, res: Response): Promise<Response> => {
  const { statusCode, message } = await serviceGetAllTeams();
  return res.status(statusCode).json(message);
};

export default controllerGetTeams;
