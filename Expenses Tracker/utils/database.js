const Sequelize = require('sequelize');

const sequelize = new Sequelize('expenseTracker', 'root', 'root', {dialect:'mysql', host:'localhost'});


module.exports = sequelize;