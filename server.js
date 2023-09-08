const express = require("express");
const app = express();

const listViewRouter = require("./list-view-router");
const listEditRouter = require("./list-edit-router");


app.use("/list-view", listViewRouter);
app.use("/list-edit", listEditRouter);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
