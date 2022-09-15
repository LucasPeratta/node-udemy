require("dotenv").config();
const express = require("express");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT;

//Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//Servir contenido estatico
app.use(express.static("public"));

//req:recibe el request q te llega, res:respuesta q mandas.
app.get("/", (req, res) => {
  res.render("Home", {
    nombre: "Lucas Peratta",
    titulo: "Curso de Node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Lucas Peratta",
    titulo: "Curso de Node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Lucas Peratta",
    titulo: "Curso de Node",
  });
});

app.get("/test", (req, res) => {
  console.log(req);
  let x = [
    {
      nombre: "Lucas Peratta",
      titulo: "Curso de Node",
    },
    {
      nombre: "Lucas Peratta",
      titulo: "Curso de Node",
    },
    {
      nombre: "Lucas Peratta",
      titulo: "Curso de Node",
    },
    {
      nombre: "Lucas Peratta",
      titulo: "Curso de Node",
    },
  ];
  res.json(x);
});

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
