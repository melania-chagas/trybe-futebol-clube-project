import { IServiceGetAllTeams } from '../interfaces/ITeams';
import Team from '../database/models/Team';

const serviceGetAllTeams = async (): Promise<IServiceGetAllTeams> => {
  const allTeams = await Team.findAll();
  return {
    statusCode: 200,
    message: allTeams,
  };
};

const serviceGetTeamById = async (id: number) => {
  const team = await Team.findOne({ where: { id } });
  return {
    statusCode: 200,
    message: team,
  };
};

export {
  serviceGetAllTeams,
  serviceGetTeamById,
};
