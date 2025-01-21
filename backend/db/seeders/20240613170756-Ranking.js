'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if(process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA
}

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    options.tableName = "Rankings"
   return queryInterface.bulkInsert(options, [
    {
      summonerId: 'waters0lid',
      doubleUpRanking: 'waters0lid',
      hyperRollRanking: 'waters0lid',
      normalRanking: 'waters0lid'
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = "Rankings"
    return queryInterface.bulkDelete("Rankings", null, {})
  }
};
