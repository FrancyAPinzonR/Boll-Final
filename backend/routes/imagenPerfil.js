// Modulos Node
const express = require("express");
const router = express.Router();
// Modulos creados
const {
    ImagenPerfil
} = require("../model/imagenPerfil")
const {
    RegistroUsuario
} = require("../model/registroUsuario")
const auth = require("../middleware/auth")
const cargarImagenPerfil = require("../middleware/file")
// Ruta
router.post("/cargarImagen", cargarImagenPerfil.single("sticker"), auth, async (req, res) => {
    const url = req.protocol + "://" + req.get("host")
    // Buscamos el usuario
    const usuario = await RegistroUsuario.findById(req.usuario._id);
    console.log(req.usuario)
    console.log(req.file)
    // Si no existe el usuario
    if (!usuario) return res.status(400).send("El usuario no existe");
    // Si existe el usuario se continua con el proceso
    let rutaImagen = null;
    if (req.file.filename) {
        rutaImagen = url + "/public/" + req.file.filename;
    } else {
        rutaImagen = null;
    }
    // Guardar imagen
    const imagenPerfil = new ImagenPerfil({
        idUsuario: usuario._id,
        sticker: rutaImagen,
    })
    // Enviar resultado
    const result = await imagenPerfil.save();
    res.status(200).send(result);
})
// Exports
module.exports = router;