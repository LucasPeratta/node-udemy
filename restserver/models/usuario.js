const { Schema, model } = require("mongoose");

const UsuariosSchema = Schema({
  name: {
    type: String,
    required: [true, "El nombre es Obligatorio"],
  },
  correo: {
    type: String,
    required: [true, "El correo es Obligatorio"],
    unique: true, //para q no se repitan los correos
  },
  password: {
    type: String,
    required: [true, "La contraseña es Obligatorio"],
  },
  imagen: {
    type: String,
  },

  rol: {
    type: String,
    required: [true],
    enum: ["ADMIN_ROLE", "USER_ROLE"],
  },

  estado: {
    type: Boolean,
    default: true,
  },

  google: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Usuario", UsuariosSchema);
