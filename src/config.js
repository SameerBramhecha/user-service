const { Sequelize } = require('sequelize');
require('dotenv').config('../.env');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
});

module.exports = sequelize;
