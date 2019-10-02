const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();
mongoose.connect("mongodb+srv://juan:1234@omni-qhsgt.gcp.mongodb.net/test?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
//(funções express) GET, POST, PUT, DELETE

//req.query captar query paramets (para filtrar)
//req.params = acessar route params (para edição, deletar)
//req.body = acessar corpo de requisição (para criação, edição)

app.use(express.json());
app.use(routes);


app.listen(3333);

