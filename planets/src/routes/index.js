const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();
router.get("/", controllers.getPlanets);

router.post("/", middlewares.PlanetValidation, controllers.createPlanets);

module.exports = router;