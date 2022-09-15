require("colors");

// const { mostrarMenu, pausa } = require("./helpers/mensajes");

const asd = require("./helpers/mensajes");

console.clear();

const main = async () => {
  console.log("Hola mundo");
  let opt = "";
  do {
    opt = await asd.mostrarMenu();

    if (opt !== "0") await pausa(); //para que no limpie la consola
  } while (opt !== "0");

  pausa();
};

main();
