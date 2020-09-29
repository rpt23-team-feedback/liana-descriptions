const { Sequelize, DataTypes } = require('sequelize');
const db = require ('../index.js');

const Bundle = db.define(
  'bundle',
  {
    id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(68),
    },
    value: {
      type: DataTypes.INTEGER(3).UNSIGNED,
    },
    logoURL: {
      type: DataTypes.STRING(2000),
    },
    helper: {
      type: DataTypes.STRING(16),
    },
    minimum: {
      type: DataTypes.INTEGER(1).UNSIGNED,
    }
  },
  {
    timestamps: false,
  }
);

module.exports = Bundle;