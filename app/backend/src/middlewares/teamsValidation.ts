import { NextFunction, Request, Response } from 'express';
import Team from '../database/models/Team';

const teamsValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body;

  if (homeTeam === awayTeam) {
    return res.status(422).json({
      message: 'It is not possible to create a match with two equal teams',
    });
  }

  const checkIfExistsHomeTeam = await Team.findByPk(homeTeam);
  const checkIfExistsAwayTeam = await Team.findByPk(awayTeam);

  if (!checkIfExistsHomeTeam || !checkIfExistsAwayTeam) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }

  next();
};

export default teamsValidation;
