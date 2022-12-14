import { Router } from 'express';
import teamsValidation from '../middlewares/teamsValidation';
import {
  controllerGetAllMatches,
  controllerSaveMatches,
  controllerUpdateMatchResult,
  controllerUpdateProgress,
} from '../controllers/matches.controller';

import tokenValidation from '../middlewares/tokenValidation';

const matchesRouter = Router();

matchesRouter.patch('/:id', controllerUpdateMatchResult);
matchesRouter.patch('/:id/finish', controllerUpdateProgress);
matchesRouter.get('/', controllerGetAllMatches);
matchesRouter.post('/', teamsValidation, tokenValidation, controllerSaveMatches);

export default matchesRouter;
