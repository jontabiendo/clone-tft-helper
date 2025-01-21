'use strict';
/** @type {import('sequelize-cli').Migration} */

let options = {};
if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA;
};

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DoubleUpRankings', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      rank: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      leaguePoints: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      wins: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      losses: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      veteran: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      inactive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      freshBlood: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      hotStreak: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      }
    }, options);
  },
  async down(queryInterface, Sequelize) {
    options.tableName = "DoubleUpRankings"
    await queryInterface.dropTable(options);
  }
};