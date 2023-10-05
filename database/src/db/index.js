const mongoose = require("mongoose");
const {MONGO_URI} = require("../config/envs");

const conn = mongoose.createConnection(MONGO_URI);

module.exports = {
    Character: conn.model("Character", require("./schemas/charactersSchema")),
    Film: conn.model("Film", require("./schemas/filmsSchema")),
    Planet: conn.model("Planet", require("./schemas/planetsSchema")),
};

