const Sequelize = require('sequelize');
require('dotenv').config();


const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      port: process.env.SQL_PORT || 8889,
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;


module.exports = sequelize;
