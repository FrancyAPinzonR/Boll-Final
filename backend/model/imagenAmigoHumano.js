// Modulos Node
const mongoose = require("mongoose");
// Esquema
const esquemaImagenAmigoHumano = new mongoose.Schema({
    idUsuario: String,
    sticker: String,
    fechaRegistro: {
        type: Date,
        default: Date.now(),
    },
})
// Exports
const ImagenAmigoHumano = mongoose.model("imagenAmigoHumano", esquemaImagenAmigoHumano);
module.exports.ImagenAmigoHumano = ImagenAmigoHumano;