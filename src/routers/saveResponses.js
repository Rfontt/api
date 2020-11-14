const express = require('express');
const router = express.Router();
const Responses = require('../database/models/Responses');
const Questions = require('../database/models/Questions');

router.post("/response/:id", (req, res) => {
	var body = req.body.resp;
	var id = req.params.id;
	
	Responses.create({
		body: body,
		questionId: id
	}).then(()=> {
		res.status(200).send({
			Mensagem: "Resposta criada com sucesso"
		})
	}).catch((error)=> {
		res.status(500).send({
			error: error
		})
	})
});	

module.exports = router;
