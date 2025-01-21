'use strict';
/** @type {import('sequelize-cli').Migration} */

let options = {};
if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA;
};

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('hyperRollRankings', {
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
    options.tableName = "hyperRollRankings"
    await queryInterface.dropTable(options);
  }
};