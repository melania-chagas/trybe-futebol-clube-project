import Matches from '../database/models/Matches';
import Team from '../database/models/Team';

const serviceGetAllMatches = async () => {
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

export default serviceGetAllMatches;
