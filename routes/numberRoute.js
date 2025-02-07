const { Router } = require("express");
const numberController = require("../controllers/numberController");

const route = Router();

route.get("/classify-number", numberController);

module.exports = route;
