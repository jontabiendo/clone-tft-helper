'use strict';
/** @type {import('sequelize-cli').Migration} */

let options = {};
if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA;
};

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HyperRollRankings', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ratedTier: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ratedRating: {
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
      }
    }, options);
  },
  async down(queryInterface, Sequelize) {
    options.tableName = "HyperRollRankings"
    await queryInterface.dropTable(options);
  }
};