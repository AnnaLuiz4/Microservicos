"use strict";

const express = require("express");

const router = new express.Router();

//endpoint
router.get("/", (req, res, next) => {
  res.status(200).send({
    nome: "Gustavo Daza Rodrigues RM: 85746",
  });
});

module.exports = router;
