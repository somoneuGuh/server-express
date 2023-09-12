const express = require("express");

function validatePostRequest(req, res, next) {
  if (
    req.method === "POST" &&
    (!req.body || Object.keys(req.body).length === 0)
  ) {
    return res.status(400).json({ error: "Cuerpo de solicitud vacío" });
  }

  next();
}

function validatePutRequest(req, res, next) {
  if (
    req.method === "PUT" &&
    (!req.body || Object.keys(req.body).length === 0)
  ) {
    return res.status(400).json({ error: "Cuerpo de solicitud vacío" });
  }

  next();
}

module.exports = { validatePostRequest, validatePutRequest };
