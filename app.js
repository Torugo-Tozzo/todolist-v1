const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

let itens = ["buy food", "cook food", "eat food"];
let workItens = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/", function (req, res) {

    let day = date.getDate();
    
        res.render("list", { tituloDaLista: day , newItem: itens});
});

app.post("/", function(req,res){
    let item = req.body.newItem;

    if (req.body.list == "Lista") {
        console.log(item +" inserido");
        workItens.push(item);
        res.redirect("/work");
    }else{
        console.log(item +" inserido");
        itens.push(item);
        res.redirect("/");
    }
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.get("/work", function(req, res) {
    res.render("list", {tituloDaLista: "Lista de Trabalho", newItem:workItens});
});

app.post("/work", function(req, res){
    let item = req.body.newItem;
    workItens.push(item);
    console.log(item+" inserido");
    res.redirect("/work");
})

app.listen(3000, function () {
    console.log("server running on port 3k.")
})