import { Request, Response } from 'express';
import serviceGetLeaderboard from '../services/leaderboard.service';

const controllerGetLeaderboard = async (req: Request, res: Response) => {
  const leaderboard = await serviceGetLeaderboard();

  return res.status(200).json(leaderboard);
};

export default controllerGetLeaderboard;
