const Sequelize = require('sequelize');
const connection = require('../database');

const Responses = connection.define('Responses', {
	body: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	questionId : {
		type: Sequelize.INTEGER,
		allowNull: false
	}
});

Responses.sync({ force: false }).then(()=> {});

module.exports = Responses;