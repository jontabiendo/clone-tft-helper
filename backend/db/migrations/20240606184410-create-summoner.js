'use strict';
/** @type {import('sequelize-cli').Migration} */

let options = {};
if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA;
};

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Summoners', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, options);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Summoners');
  }
};