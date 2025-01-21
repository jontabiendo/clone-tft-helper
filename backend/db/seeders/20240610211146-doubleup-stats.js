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
   options.tableName = "doubleUpRankings"

    return queryInterface.bulkInsert(options, [
      {
        id: "waters0lid",
        rank: 'SILVER II',
        leaguePoints: 33,
        wins: 7,
        losses: 1,
        veteran: false,
        inactive: false,
        freshBlood: false,
        hotStreak: false
      },
      {
        id: "poopy",
        rank: 'FAKE I',
        leaguePoints: 33,
        wins: 7,
        losses: 1,
        veteran: false,
        inactive: false,
        freshBlood: false,
        hotStreak: false
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
    options.tableName = "doubleUpRankings"
    return queryInterface.bulkDelete(options, null, {})
  }
};
