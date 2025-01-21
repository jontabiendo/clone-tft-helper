'use strict';
/** @type {import('sequelize-cli').Migration} */

let options = {};
if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA;
};

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('traits', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tier_total: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tier_current: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      style: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    }, options);
  },
  async down(queryInterface, Sequelize) {
    options.tableName = "traits"
    await queryInterface.dropTable(options);
  }
};