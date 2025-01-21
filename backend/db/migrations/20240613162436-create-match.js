'use strict';
/** @type {import('sequelize-cli').Migration} */

let options = {};
if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA;
};

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('matches', {
      id: {
        type: Sequelize.STRING,
        unique: true,
        primaryKey: true
      },
      tft_set: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      game_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      queue_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      set_core_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    }, options);
  },
  async down(queryInterface, Sequelize) {
    options.tableName = "matches"
    await queryInterface.dropTable(options);
  }
};