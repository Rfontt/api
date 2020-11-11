const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routerGetQuestions = require('./routers/allQuestions');
const routerGetQuestionId = require('./routers/questionId');
const routerCreateQuestions = require('./routers/saveQuestion');
const routerCreateResponses = require('./routers/saveResponses');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", routerGetQuestions);
app.use("/", routerGetQuestionId);
app.use("/", routerCreateQuestions);
app.use("/", routerCreateResponses);


app.listen(8080);
