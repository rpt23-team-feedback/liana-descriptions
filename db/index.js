const Sequelize = require('sequelize');
const DataTypes = require('sequelize');

const db = new Sequelize ('bundle', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = db;