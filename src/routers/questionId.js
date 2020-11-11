const express = require('express');
const router = express.Router();
const Questions = require('../database/models/Questions');
const Responses = require('../database/models/Responses');


router.get("/question/:id", (req, res) => {
	var id = req.params.id;
	
	Questions.findOne({ 
		where: { id: id }
	 }).then((question) => {
	 	if (question != undefined) {
	 		Responses.findAll({
	 			where: { questionId: question.id },
	 			order: [['id', 'DESC']] 
	 	}).then((response) => {
	 		res.send({
	 			questionId: question,
	 			response: response
	 		})
	 	})

	 	}else {
	 		res.status(404).send("Not found");
	 	}
	 })
})


module.exports = router;