import { Router } from 'express';
import {
  controllerGetAllMatches,
  controllerSaveMatches,
  controllerUpdateProgress,
} from '../controllers/matches.controller';

const matchesRouter = Router();

matchesRouter.patch('/:id/finish', controllerUpdateProgress);
matchesRouter.get('/', controllerGetAllMatches);
matchesRouter.post('/', controllerSaveMatches);

export default matchesRouter;
