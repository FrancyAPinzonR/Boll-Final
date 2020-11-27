// Modulos Node
const express = require("express");
const router = express.Router();
// Modulos Creados
const {
    ImagenAmigoHumano
} = require("../model/imagenAmigoHumano");
const {
    RegistroUsuario
} = require("../model/registroUsuario");
const auth = require("../middleware/auth");
const cargarImagenPerfil = require("../middleware/file");
// Ruta
// Obtener imagen
router.get("/mostrarimagenamigohumano", auth, async (req, res) => {
    // Buscamos al usuario
    const usuario = await RegistroUsuario.findById(req.usuario._id);
    // Si no existe el usuario
    if (!usuario) return res.status(400).send("El usuario no existe");
    // Si el usuario existe
    const imagenAmigoHumano = await ImagenAmigoHumano.find({
        idUsuario: req.usuario._id,
    });
    res.send(imagenAmigoHumano);
});
// Cargar Imagen en Base de Datos
router.post(
    "/cargarimagenamigohumano",
    cargarImagenPerfil.single("sticker"),
    auth,
    async (req, res) => {
        const url = req.protocol + "://" + req.get("host");
        // Buscamos al usuario
        const usuario = await RegistroUsuario.findById(req.usuario._id);
        // Si no existe el usuario
        if (!usuario) return res.status(400).send("El usuario no existe");
        // Si el usuario existe se continua con el proceso
        let rutaImagen = null;
        if (req.file.filename) {
            rutaImagen = url + "/public/" + req.file.filename;
        } else {
            rutaImagen = null;
        }
        // Guarda imagen
        const imagenAmigoHumano = new ImagenAmigoHumano({
            idUsuario: usuario._id,
            sticker: rutaImagen,
        });
        // Enviar resultado
        const result = await imagenAmigoHumano.save();
        res.status(200).send(result);
    }
);
// Eliminar imagen
router.delete("/:_id", auth, async (req, res) => {
    // Buscamos el usuario
    const usuario = await RegistroUsuario.findById(req.usuario._id);
    // Si no existe el usuario
    if (!usuario) return res.status(400).send("El usuario no existe");
    // Si existe se elimina la imagen
    const imagenAmigoHumano = await ImagenAmigoHumano.findByIdAndDelete(
        req.params._id
    );
    // Si no existe la imagen en la Base de Datos
    if (!imagenAmigoHumano)
        return res.status(400).send("No se puede encontrar la imagen de perfil");
    // Si la imagen fue eliminada
    res.status(200).send({
        message: "Imagen Perfil Eliminada",
    });
});
// Exports
module.exports = router;