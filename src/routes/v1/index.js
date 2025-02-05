const express = require("express");
const { InfoController } = require("../../controllers");
const AirplaneRoutes = require("./airplane-routes");
const router = express.Router();

router.use("/airplane", AirplaneRoutes);

module.exports = router;
