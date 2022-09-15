// const express = require("express");
// const cors = require("cors");
// const { dbConnection } = require("../database/config");
// const app = express();
// const port = process.env.PORT;
// const usuariosPath = "/api/users";

// dbConnection();

// app.use(cors());

// //Lectura del body
// app.use(express.json());

// app.use(express.static("public"));

// app.use(usuariosPath, require("../routes/user"));

// app.listen(port, () => {
//   console.log("Servidor corriendo en puerto", port);
// });

const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = 8081;
    this.usuariosPath = "/api/users";

    //conectar a base de datos
    this.conectarDb();

    // Middlewares
    this.middlewares();

    // Rutas de mi aplicación
    this.routes();
  }

  async conectarDb() {
    await dbConnection();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json());

    // Directorio Público
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/user"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
