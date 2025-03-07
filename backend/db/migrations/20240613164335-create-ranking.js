'use strict';
/** @type {import('sequelize-cli').Migration} */

let options = {};
if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA;
};

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rankings', {
      summonerId: {
        type: Sequelize.STRING
      },
      doubleUpRanking: {
        type: Sequelize.STRING
      },
      hyperRollRanking: {
        type: Sequelize.STRING
      },
      normalRanking: {
        type: Sequelize.STRING
      }
    }, options);
  },
  async down(queryInterface, Sequelize) {
    options.tableName =  "rankings"
    await queryInterface.dropTable(options);
  }
};