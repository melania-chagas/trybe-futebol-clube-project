import { Router } from 'express';
import controllerGetTeams from '../controllers/teams.controller';

const teamsRouter = Router();

teamsRouter.get('/', controllerGetTeams);

export default teamsRouter;
