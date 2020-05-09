const express = require("express");

const routes = express.Router();

const CustomerController = require("../controllers/CustomerController");

routes.get("/customers", CustomerController.getAll);

routes.post("/customer", CustomerController.set);
routes.get("/customer/:id", CustomerController.get);
routes.delete("/customer/:id", CustomerController.delete);

module.exports = routes;