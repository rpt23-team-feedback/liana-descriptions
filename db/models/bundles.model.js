const { Sequelize, DataTypes } = require('sequelize');
const db = require ('../index.js');

const Bundle = db.define(
  'bundle',
  {
    id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(68),
    },
    value: {
      type: DataTypes.INTEGER(3).UNSIGNED,
    },
    logoURL: {
      type: DataTypes.STRING(101),
    },
    helper: {
      type: DataTypes.STRING(16),
    },
    minimum: {
      type: DataTypes.INTEGER(1).UNSIGNED,
    },
    timesUp: {
      type: DataTypes.STRING(10),
    },
  },
  {
    timestamps: false,
    logging: false,
  },
);

module.exports = Bundle;
