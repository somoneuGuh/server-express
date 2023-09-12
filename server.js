const express = require("express");
const app = express();

function validateHttpMethods(req, res, next) {
  const validMethods = ["GET", "POST", "PUT", "DELETE"];

  if (!validMethods.includes(req.method)) {
    return res.status(400).json({ error: "Método HTTP no válido" });
  }

  next();
}

app.use(express.json());
app.use(validateHttpMethods);

const listViewRouter = express.Router();

listViewRouter.get("/completed", (req, res) => {});

listViewRouter.get("/incomplete", (req, res) => {});

app.use("/list-view", listViewRouter);

const listEditRouter = express.Router();

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

listEditRouter.use(validatePostRequest, validatePutRequest);

app.use("/list-edit", listEditRouter);

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
