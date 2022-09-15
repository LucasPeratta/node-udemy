const { response, request } = require("express");

const Usuario = require("../models/usuario");

const usuariosGet = (req = request, res = response) => {
  const { q, nombre = "No name", apikey, page = 1, limit } = req.query; // const query = req.query si queres todos los parametros
  apikey && console.log("dasd");
  res.json({
    msg: "get API - controlador",
    q,
    nombre,
    apikey,
    page,
    limit,
  });
};

const usuariosPut = (req, res = response) => {
  const { id } = req.params; // const id = req.params.id, es lo mismo

  res.json({
    msg: "put API",
    id,
  });
};

const usuariosPost = (req, res = response) => {
  const body = req.body;
  const usuario = new Usuario(body);

  res.json({
    msg: "post API - usuariosPost",
    usuario,
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "delete API",
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: "patch API",
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
};
