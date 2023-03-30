const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let itens = ["buy food", "cook food", "eat food"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/", function (req, res) {
    let today = new Date();
    let options = {
        weekDate: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }

    let day = today.toLocaleDateString("pt-BR", options);

    res.render("list", { tipoDeDia: day , newItem: itens});
});

app.post("/", function(req,res){
    let item = req.body.newItem;
    console.log(item +" inserido");
    itens.push(item);
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("server running on port 3k.")
})