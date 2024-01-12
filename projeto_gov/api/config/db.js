const { Sequelize } = require('sequelize');
require('dotenv').config();
const db = new Sequelize(`${process.env.MYSQL_DATABASE}`, `${process.env.MYSQL_USER}`, `${process.env.MYSQL_PASSWORD}`,{
    host: '127.0.0.1',
    dialect: 'mysql',
  });

module.exports = db;