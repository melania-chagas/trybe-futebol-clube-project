import { Router } from 'express';
import { controllerGetAllMatches, controllerSaveMatches } from '../controllers/matches.controller';

const matchesRouter = Router();

matchesRouter.get('/', controllerGetAllMatches);
matchesRouter.post('/', controllerSaveMatches);

export default matchesRouter;
