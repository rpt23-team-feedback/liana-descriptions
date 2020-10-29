const Sequelize = require('sequelize');
const pwd = require('../dbconfig').mysqlPWD;

const db = new Sequelize ('hbdesc', 'root', pwd, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

module.exports = db;
