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

    options.tableName = "HyperRollRankings"

    return queryInterface.bulkInsert(options, [
      {
        id: 'waters0lid',
        ratedTier: 'ORANGE',
        ratedRating: 5220,
        wins: 189,
        losses: 138
      },
      {
        id: 'poopy',
        ratedTier: 'FAKE',
        ratedRating: 5220,
        wins: 189,
        losses: 138
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
    options.tableName = "HyperRollRankings"
    return queryInterface.bulkDelete("HyperRollRankings", null, {})
  }
};
