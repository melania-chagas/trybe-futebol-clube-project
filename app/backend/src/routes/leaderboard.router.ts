import { Router } from 'express';
import controllerGetLeaderboard from '../controllers/leaderboard.controller';

const leaderboardRouter = Router();

leaderboardRouter.get('/home', controllerGetLeaderboard);

export default leaderboardRouter;
