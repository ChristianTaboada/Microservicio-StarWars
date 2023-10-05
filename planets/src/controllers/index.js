const { catchedAsync } = require("../utils");

module.exports = {
    getPlanets: catchedAsync (require("./getPlanet")),
    createPlanets: catchedAsync (require("./createPlanet"))
};