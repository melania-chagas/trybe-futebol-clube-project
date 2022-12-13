import { BOOLEAN, Model, INTEGER } from 'sequelize';
import db from '.';
import Team from './Team';

class Matches extends Model {
  declare id: number;
  declare homeTeam: number;
  declare homeTeamGoals: number;
  declare awayTeam: number;
  declare awayTeamsGoals: number;
  declare inProgress: boolean;
}

Matches.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  homeTeam: {
    type: INTEGER,
    allowNull: false,
  },

  homeTeamGoals: {
    allowNull: false,
    type: INTEGER,
  },

  awayTeam: {
    allowNull: false,
    type: INTEGER,
  },

  awayTeamGoals: {
    allowNull: false,
    type: INTEGER,
  },

  inProgress: {
    allowNull: false,
    type: BOOLEAN,
  },

}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

Matches.belongsTo(Team, {
  foreignKey: 'homeTeam',
  as: 'teamHome',
});

Matches.belongsTo(Team, {
  foreignKey: 'awayTeam',
  as: 'teamAway',
});

Team.hasMany(Matches, {
  foreignKey: 'homeTeam',
  as: 'homeTeam',
});

Team.hasMany(Matches, {
  foreignKey: 'awayTeam',
  as: 'awayTeam',
});

export default Matches;
