import { Router, Request, Response } from 'express';
import teamsValidation from '../middlewares/teamsValidation';
import {
  controllerGetAllMatches,
  controllerSaveMatches,
  controllerUpdateMatchResult,
  controllerUpdateProgress,
} from '../controllers/matches.controller';

import tokenValidation from '../middlewares/tokenValidation';

const matchesRouter = Router();

matchesRouter.patch(
  '/:id',
  async (req: Request, res: Response) => (controllerUpdateMatchResult(req, res)),
);
matchesRouter.patch(
  '/:id/finish',
  async (req: Request, res: Response) => (controllerUpdateProgress(req, res)),
);

matchesRouter.get(
  '/',
  async (req: Request, res: Response) => (controllerGetAllMatches(req, res)),
);

matchesRouter.post(
  '/',
  teamsValidation,
  tokenValidation,
  async (req: Request, res: Response) => (controllerSaveMatches(req, res)),
);

export default matchesRouter;
