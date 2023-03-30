const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    var today = new Date();
    var day = "";

    switch (today.getDay()) {
        case 0:
            day = "Domiguim";
            break;
        case 1:
            day = "segundona braba";
            break;
        case 2:
            day = "terça dos cria";
            break;
        case 3:
            day = "quartinha de lei";
            break;
        case 4:
            day = "quinta pré sexta";
            break;
        case 5:
            day = "Sexta feira sua linda";
            break;
        case 6:
            day = "Sabadim relax";
            break;

        default:
            break;
    }

    res.render("list", { tipoDeDia: day });
});

app.listen(3000, function () {
    console.log("server running on port 3k.")
})