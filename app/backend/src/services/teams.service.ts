import { IServiceGetAllTeams } from '../interfaces/ITeams';
import Team from '../database/models/Team';

const serviceGetAllTeams = async (): Promise<IServiceGetAllTeams> => {
  const allTeams = await Team.findAll();
  return {
    statusCode: 200,
    message: allTeams,
  };
};

export default serviceGetAllTeams;
