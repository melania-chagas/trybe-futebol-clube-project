import { Router } from 'express';
import controllerGetAllMatches from '../controllers/matches.controller';

const matchesRouter = Router();

matchesRouter.get('/', controllerGetAllMatches);

export default matchesRouter;
