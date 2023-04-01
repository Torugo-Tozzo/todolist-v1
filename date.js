exports.getDate = function() {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }

    return today.toLocaleDateString("pt-BR", options); 
}

exports.getDay = function() {
    let today = new Date();
    let options = {
        weekday: "long"
    }

    return today.toLocaleDateString("pt-BR", options); 
}