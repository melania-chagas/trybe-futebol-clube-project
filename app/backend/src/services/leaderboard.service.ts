import Team from '../database/models/Team';
import Matches from '../database/models/Matches';

let stats = {
  name: '',
  totalPoints: 0,
  totalGames: 0,
  totalVictories: 0,
  totalDraws: 0,
  totalLosses: 0,
  goalsFavor: 0,
  goalsOwn: 0,
  goalsBalance: 0,
  efficiency: '',
};

const clearStats = () => {
  stats = {
    name: '',
    totalPoints: 0,
    totalGames: 0,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 0,
    goalsOwn: 0,
    goalsBalance: 0,
    efficiency: '',
  };
};

const getStats = (match: Matches) => {
  const result = match.homeTeamGoals - match.awayTeamGoals;
  // console.log(result);
  if (result > 0) {
    stats.totalVictories += 1;
    stats.totalPoints += 3;
  } else if (result === 0) {
    stats.totalDraws += 1;
    stats.totalPoints += 1;
  } else {
    stats.totalLosses += 1;
  }

  stats.goalsFavor += match.homeTeamGoals;
  stats.goalsOwn += match.awayTeamGoals;
  stats.goalsBalance += result;
};

const sortFunction = (a: any, b: any) => b.totalPoints - a.totalPoints
|| b.totalVictories - a.totalVictories
|| b.goalsBalance - a.goalsBalance
|| b.goalsFavor - a.goalsFavor
|| a.goalsOwn - b.goalsOwn;

const serviceGetLeaderboard = async () => {
  const allTeams = await Team.findAll({
    include: [
      { model: Matches, as: 'homeTeam' },
    ],
  });

  const leaderboard = allTeams.map((team) => {
    clearStats();
    stats.name = team.teamName;
    team.homeTeam.forEach((match: any) => {
      stats.totalGames += 1;
      getStats(match);
      stats.efficiency = ((stats.totalPoints / (stats.totalGames * 3)) * 100).toFixed(2);
    });
    return stats;
  });
  leaderboard.sort(sortFunction);
  return leaderboard;
};

export default serviceGetLeaderboard;
