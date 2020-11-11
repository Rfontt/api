const express = require('express');
const router = express.Router();
const Questions = require('../database/models/Questions');

router.get("/allQuestions", (req, res) => {
	Questions.findAll({ raw: true, order: [
		['id', 'DESC']
		] 
	}).then((questions)=> {
		res.status(200).send({
			questions: questions
		})
	})
})


module.exports = router;