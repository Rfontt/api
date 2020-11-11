const Sequelize = require('sequelize');

const connection = new Sequelize('app_questions', 'root', '99836620', {
	host : 'localhost',
	dialect: 'mysql',
	timezone: '-03:00'

});

module.exports = connection;