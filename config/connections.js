const Sequ = require('sequelize');
require('dotenv').config();

const sequelize = new Sequ(
    process.env.DB_NAME,
     process.env.DB_USER, 
     process.env.DB_PASS, {
        host: 'localhost',
        dialect: 'mysql',
        port : 3306,
     }
);

module.exports = sequelize;
