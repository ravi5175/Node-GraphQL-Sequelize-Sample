const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'student', 
    'postgres', 
    'password', {
        dialect: 'postgres',
        host: 'localhost',
        port: 8081,
    });

module.exports = sequelize;