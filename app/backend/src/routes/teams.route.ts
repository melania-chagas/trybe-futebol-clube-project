import { Router } from 'express';
import { controllerGetTeamById, controllerGetTeams } from '../controllers/teams.controller';

const teamsRouter = Router();

teamsRouter.get('/:id', controllerGetTeamById);
teamsRouter.get('/', controllerGetTeams);

export default teamsRouter;
