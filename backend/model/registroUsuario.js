// Modelos de Node
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
// Esquema
const esquemaUsuario = new mongoose.Schema({
    nombre: String,
    correo: String,
    tipoDocumento: String,
    numeroIdentificacion: String,
    telefono: String,
    password: String,
    fechaRegistro: {
        type: Date,
        default: Date.now,
    },
});
// Generar JWT
esquemaUsuario.methods.generateJWT = function () {
    return jwt.sign({
            _id: this._id,
            nombre: this.nombre,
            correo: this.correo,
            tipoDocumento: this.tipoDocumento,
            numeroIdentificacion: this.numeroIdentificacion,
            telefono: this.telefono,
            password: this.password,
        },
        "secretkey"
    );
};
// Exports
const RegistroUsuario = mongoose.model("usuario", esquemaUsuario);
module.exports.RegistroUsuario = RegistroUsuario;
module.exports.esquemaUsuario = esquemaUsuario;