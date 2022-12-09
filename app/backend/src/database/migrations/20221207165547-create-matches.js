'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      
      homeTeam: {
        field: 'home_team',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'teams',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      homeTeamGoals: {
        field: 'home_team_goals',
        type: Sequelize.INTEGER,
        allowNull: false
      },

      awayTeam: {
        field: 'away_team',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'teams',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      awayTeamsGoals: {
        field: 'away_team_goals',
        type: Sequelize.INTEGER,
        allowNull: false
      },

      inProgress: {
        field: 'in_progress',
        type: Sequelize.BOOLEAN,
        allowNull: false
      },

    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('matches')
  }
}

