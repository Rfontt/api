# Sobre o projeto: 

Esse projeto é uma api em node.js, a qual pode ser consumida em diferentes front-ends.
Ela é feita utilizando o banco de dados mysql e tem como objetivo criar perguntas e respostas e mostrá-las. 

# Pacotes necessários para o projeto:

```
npm install express --save ou yarn add express --save

npm install body-parser --save ou yarn add body-parser --save

npm install sequelize  --save ou yarn add sequelize  --save

npm install mysql2 --save ou yarn add mysql2  --save

```

# Ações realizadas:

- [x] Criação de um servidor que roda na porta 8080 com express;

- [x] Rotas get e post para, respectivamente, pegar todas as respostas e criar perguntas ou respondê-las com a utilização do framework  express.

- [x] Integração com o banco de dados e criação dos models com o Sequelize.

- [x] Pegar os dados que o usuário digitam e tranformá-los em json com o body-parser. 

- [x] Api pronta para o consumo de qualquer front-end.