import { Router } from 'express';
import teamsValidation from '../middlewares/teamsValidation';
import {
  controllerGetAllMatches,
  controllerSaveMatches,
  controllerUpdateProgress,
} from '../controllers/matches.controller';

const matchesRouter = Router();

matchesRouter.patch('/:id/finish', controllerUpdateProgress);
matchesRouter.get('/', controllerGetAllMatches);
matchesRouter.post('/', teamsValidation, controllerSaveMatches);

export default matchesRouter;
