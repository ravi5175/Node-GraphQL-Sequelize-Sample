const Sequelize = require('sequelize');
const sequelize = require('../database');

const Student = sequelize.define('student', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    course:{
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = {
    Student,
};