import { Router } from 'express';
import {
  controllerGetLeaderboardAway,
  controllerGetLeaderboardHome,
} from '../controllers/leaderboard.controller';

const leaderboardRouter = Router();

leaderboardRouter.get('/home', controllerGetLeaderboardHome);
leaderboardRouter.get('/away', controllerGetLeaderboardAway);

export default leaderboardRouter;
