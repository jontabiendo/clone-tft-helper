'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ParticipantTrait extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ParticipantTrait.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    participantId: DataTypes.INTEGER,
    traitId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ParticipantTrait',
    tableName: 'participantTraits'
  });
  return ParticipantTrait;
};