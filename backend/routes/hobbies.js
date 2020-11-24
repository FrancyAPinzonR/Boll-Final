// Modulos de Node
const express = require("express");
const router = express.Router();
// Modulos Creados
const {
    Hobbies
} = require("../model/hobbies");
const {
    RegistroUsuario
} = require("../model/registroUsuario");
const auth = require("../middleware/auth");
// Ruta
// Listar Hobbies
router.get("/", auth, async (req, res) => {
    // Buscamos el usuario
    const usuario = await RegistroUsuario.findById(req.usuario._id);
    // Si no existe el usuario
    if (!usuario) return res.status(400).send("El usuario no existe");
    // Si el usuario existe
    const hobbies = await Hobbies.find({
        idUsuario: usuario._id,
    })
    res.send(hobbies);
})
// Registrar Hobbies
router.post("/datoshobbies", auth, async (req, res) => {
    // Buscamos el usuario
    const usuario = await RegistroUsuario.findById(req.usuario._id);
    // Si no existe el usuario
    if (!usuario) return res.status(400).send("El usuario no existe");
    // Si el usuario existe
    const hobbies = new Hobbies({
        idUsuario: usuario._id,
        actividadFisica: req.body.actividadFisica,
        actividadRutina: req.body.actividadRutina,
        ocio: req.body.ocio,
    });
    // Enviar resultado
    const result = await hobbies.save();
    res.status(200).send(result);
});
// Exports
module.exports = router;