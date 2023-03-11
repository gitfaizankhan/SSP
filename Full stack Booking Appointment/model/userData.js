const Sequelize = require('sequelize');

const sequelize = require('../utils/databaseFunc');

const UserData = sequelize.define('userdata', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    mobile: Sequelize.NUMBER,
    email: Sequelize.STRING
}, {
    timestamps: false
});

module.exports = UserData;