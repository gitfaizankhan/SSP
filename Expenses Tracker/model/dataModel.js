const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const dataModel = sequelize.define('expenseData', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    expenseAmount: Sequelize.INTEGER,
    expenseDesc: Sequelize.STRING,
    expenseCate: Sequelize.STRING
    }, {
        timestamps:false
    }
);

module.exports = dataModel;