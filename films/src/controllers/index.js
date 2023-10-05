const { catchedAsync} = require ("../utils");

module.exports = {
    getFilms: catchedAsync (require("./getFilm")),
    createFilms: catchedAsync (require("./createFilm"))
};