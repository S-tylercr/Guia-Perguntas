const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Ask = require("./database/Ask");
//Database

connection
    .authenticate()
    .then(() => {
        console.log("conexão feita com o banco de dados!")

    })
    .catch((msgErro) => { console.log(msgErro); })


// Estou dizendo para o Express usar o EJS como View engine
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.text());

//Rotas
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Ask.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/");
    });
});


app.listen(8080, () => { console.log("App rodando!"); });