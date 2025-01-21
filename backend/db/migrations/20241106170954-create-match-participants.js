'use strict';
/** @type {import('sequelize-cli').Migration} */

let options = {};
if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA;
};

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('matchParticipants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      matchId: {
        type: Sequelize.STRING
      },
      participantId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, options);
  },
  async down(queryInterface, Sequelize) {
    options.tableName = "matchParticipants"
    await queryInterface.dropTable(options);
  }
};