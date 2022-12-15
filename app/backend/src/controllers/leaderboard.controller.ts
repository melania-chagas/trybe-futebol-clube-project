import { Request, Response } from 'express';
import serviceGetLeaderboardAway from '../services/leaderboardAway.service';
import serviceGetLeaderboardHome from '../services/leaderboardHome.service';

const controllerGetLeaderboardHome = async (_req: Request, res: Response) => {
  const leaderboard = await serviceGetLeaderboardHome();

  return res.status(200).json(leaderboard);
};

const controllerGetLeaderboardAway = async (_req: Request, res: Response) => {
  const leaderboard = await serviceGetLeaderboardAway();

  return res.status(200).json(leaderboard);
};

export {
  controllerGetLeaderboardHome,
  controllerGetLeaderboardAway,

};
