const express = require("express");
const listViewRouter = express.Router();

listViewRouter.get("/completed", (req, res) => {});

listViewRouter.get("/incomplete", (req, res) => {});

module.exports = listViewRouter;
