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

export {
  serviceGetAllMatchesNoFilter,
  serviceGetAllInProgress,
};
