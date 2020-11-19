// Modulos Node
const express = require("express");
const router = express.Router();
// Modulos creados
const {
    ImagenPerfil
} = require("../model/imagenPerfil");
const {
    RegistroUsuario
} = require("../model/registroUsuario");
const auth = require("../middleware/auth");
const cargarImagenPerfil = require("../middleware/file");
// Ruta
// Obtener Imagen de Perfil
router.get("/", auth, async (req, res) => {
    // Buscamos el usuario
    const usuario = await RegistroUsuario.findById(req.usuario._id);
    // Si no existe el usuario
    if (!usuario) return res.status(400).send("El usuario no existe");
    // Si el usuario existe
    const imagPerfil = await ImagenPerfil.find();
    res.send(imagPerfil);
});
// Cargar Imagen en Base de Dartos
router.post(
    "/cargarImagen",
    cargarImagenPerfil.single("sticker"),
    auth,
    async (req, res) => {
        const url = req.protocol + "://" + req.get("host");
        // Buscamos el usuario
        const usuario = await RegistroUsuario.findById(req.usuario._id);
        console.log(req.usuario);
        console.log(req.file);
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
        });
        // Enviar resultado
        const result = await imagenPerfil.save();
        res.status(200).send(result);
    }
);
// Eliminar Foto de Perfil
router.delete("/:_id", auth, async (req, res) => {
    // Buscamos el usuario
    const usuario = await RegistroUsuario.findById(req.usuario._id);
    // Si no existe el usuario
    if (!usuario) return res.status(400).send("El usuario no existe");
    // Si existe eliminamos imagen
    const imagenPerfil = await ImagenPerfil.findByIdAndDelete(req.params._id);
    // Si no existe imagen en Base de Datos
    if (!imagenPerfil)
        return res.status(400).send("No se pude encontrar la imagen de perfil");
    // Si la imagen fue eliminada
    res.status(200).send({
        message: "Imagen de Perfil eliminada",
    });
});
// Exports
module.exports = router;