const express = require("express");
const response = require("../../../network/response");
const Controller = require("./index");

const router = express.Router();

router.post("/login", async function (req, res) {
  try {
    const login = await Controller.login(req.body.username, req.body.password);
    response.success(req, res, login, 202);
  } catch (error) {
    response.error(req, res, error.message, 400);
  }
});

module.exports = router;
