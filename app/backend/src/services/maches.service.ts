import { IResultMatch } from '../interfaces/IResultMatch';
import { IMatch } from '../interfaces/IMatch';
import Matches from '../database/models/Matches';
import Team from '../database/models/Team';

const serviceGetAllMatchesNoFilter = async () => {
  const allMatches = await Matches.findAll({
    include: [
      { model: Team, as: 'teamHome', attributes: ['teamName'] },
      { model: Team, as: 'teamAway', attributes: ['teamName'] },
    ],
  });

  return {
    statusCode: 200,
    message: allMatches,
  };
};

const serviceGetAllInProgress = async (inProgressStatus: string) => {
  const inProgress = inProgressStatus === 'true';
  const filteredByInProgressStatus = await Matches.findAll({
    where: { inProgress },
    include: [
      { model: Team, as: 'teamHome', attributes: ['teamName'] },
      { model: Team, as: 'teamAway', attributes: ['teamName'] },
    ],
  });
  return {
    statusCode: 200,
    message: filteredByInProgressStatus,
  };
};

const serviceSaveMatches = async (newMatch: IMatch) => {
  const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = newMatch;
  const result = await Matches.create({
    homeTeam,
    awayTeam,
    homeTeamGoals,
    awayTeamGoals,
    inProgress: true,
  });

  return {
    statusCode: 201,
    message: result,
  };
};

const serviceUpdateProgress = async (id: number) => {
  const [result] = await Matches.update(
    { inProgress: false },
    { where: { id } },
  );
  if (result) {
    return {
      statusCode: 200,
      message: 'Finished',
    };
  }
};

const serviceUpdateMatchResult = async (id: number, currentResult: IResultMatch) => {
  const { homeTeamGoals, awayTeamGoals } = currentResult;
  const [result] = await Matches.update(
    {
      homeTeamGoals,
      awayTeamGoals,
    },
    { where: { id } },
  );

  return result;
};

export {
  serviceGetAllMatchesNoFilter,
  serviceGetAllInProgress,
  serviceSaveMatches,
  serviceUpdateProgress,
  serviceUpdateMatchResult,
};
