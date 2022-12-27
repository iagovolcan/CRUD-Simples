const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const porta = 8000;
const usuarios = require('./routes/usuarios');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.get('/', (req, res, next)=>{
    res.send('Rota inicial')
})

app.post('/cadastro', usuarios);

app.get('/usuarios', usuarios);

app.put('/editarusuario/*', usuarios);

app.delete('/deletarusuario/*', usuarios);

app.listen(porta, ()=>{console.log(`Servidor rodando na URL http://localhost:${porta}`)})