const express = require('express');
const router = express.Router();
const tableQuestions = require('../database/models/Questions');

router.post("/saveQuestions", (req, res) => {
	var title = req.body.title;
	var description = req.body.description;

	tableQuestions.create({
		title: title,
		description: description
	}).then(()=> {
		if (title != '' && description != '') {
			res.status(201).send("Pergunta criada com sucesso");
		}else {
			res.status(401).send("Preencha os campos");
		}
		
	}).catch((error)=> {
		res.status(500).send({
			error: error
		});
	})
})


module.exports = router;