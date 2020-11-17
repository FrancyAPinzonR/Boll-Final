// Modulos Node
const mongoose = require("mongoose");
// Esquema
const esquemaImagenPerfil = new mongoose.Schema({
    idUsuario: String,
    sticker: String,
    fechaRegistro: {
        type: Date,
        default: Date.now(),
    },
});
// Exports
const ImagenPerfil = mongoose.model("imagenPerfil", esquemaImagenPerfil);
module.exports.ImagenPerfil = ImagenPerfil;