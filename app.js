const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var itens = ["buy food", "cook food", "eat food"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req, res) {
    var today = new Date();
    var options = {
        weekDate: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }

    var day = today.toLocaleDateString("pt-BR", options);

    res.render("list", { tipoDeDia: day , newItem: itens});
});

app.post("/", function(req,res){
    var item = req.body.newItem;
    console.log(item +" inserido");
    itens.push(item);
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("server running on port 3k.")
})