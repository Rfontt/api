const express = require('express');
const router = express.Router();
const Responses = require('../database/models/Responses');

router.post("/responses", (req, res) => {
	var body = req.body.response;
	var id = req.body.responseId;

	Responses.create({
		body: body,
		questionId: id
	}).then(()=> {
		res.status(201).send("Resposta criada com sucesso");
	}).catch((error)=> {
		res.status(500).send(error);
	})
})


module.exports = router;