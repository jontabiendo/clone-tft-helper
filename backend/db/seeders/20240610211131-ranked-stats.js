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
   options.tableName = "normalRankings"

   return queryInterface.bulkInsert(options, [
    {
      id: "waters0lid",
      rank: 'PLATINUM III',
      leaguePoints: 75,
      wins: 37,
      losses: 40,
      veteran: false,
      inactive: false,
      freshBlood: false,
      hotStreak: false
    },
    {
      id: "poopy",
      rank: 'FAKE I',
      leaguePoints: 75,
      wins: 37,
      losses: 40,
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
    options.tableName = "normalRankings"
    return queryInterface.bulkDelete(options, null, {})
  }
};
