const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/",function(req,res){
    var today = new Date();

    if(today.getDate() == 6 || today.getDate == 0){
        res.send("fim de semana");
    }else{
        res.send("dia de semana");
    }
});

app.listen(3000, function(){
    console.log("server running on port 3k.")
})