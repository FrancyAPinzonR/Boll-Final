// Modulos de Node
const mongoose = require("mongoose");
// Esquema
const esquemaHobbies = new mongoose.Schema({
    idUsuario: String,
    actividadFisica: String,
    actividadRutina: String,
    ocio: String,
    fechaRegistro: {
        type: Date,
        default: Date.now(),
    }
})
// Exports
const Hobbies = mongoose.model("hobbies", esquemaHobbies);
module.exports.Hobbies = Hobbies;