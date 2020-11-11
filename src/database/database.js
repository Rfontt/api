const Sequelize = require('sequelize');

const connection = new Sequelize('app_questions', 'xxx', 'xxx', {
	host : 'localhost',
	dialect: 'mysql',
	timezone: '-03:00'

});

module.exports = connection;
