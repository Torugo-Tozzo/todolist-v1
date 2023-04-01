module.exports = getDate;

function getDate() {
    let today = new Date();
    let options = {
        weekDate: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }

    let day = today.toLocaleDateString("pt-BR", options);
    return day;
}