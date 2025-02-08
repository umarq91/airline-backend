const express = require("express");
const { InfoController } = require("../../controllers");
const AirplaneRoutes = require("./airplane-routes");
const CityRoutes = require("./city-routes");

const router = express.Router();

router.use("/airplane", AirplaneRoutes);
router.use("/city", CityRoutes);


module.exports = router;
