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
    });
    res.send(hobbies);
});
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
// Eliminar Hobbies
router.delete("/:_id", auth, async (req, res) => {
    // Buscamos el usuario
    const usuario = await RegistroUsuario.findById(req.usuario._id);
    // Si no existe el usuario
    if (!usuario) return res.status(400).send("El usuario no existe");
    // Si existe eliminamos los hobbies
    const hobbies = await Hobbies.findByIdAndDelete(req.params._id);
    // Si no existe la actividad
    if (!hobbies)
        return res.status(400).send("No se encontró los hobbies para eliminar");
    // Si se eliminan los hobbies
    res.status(200).send({
        message: "Hobbies eliminados",
    });
});
// Exports
module.exports = router;