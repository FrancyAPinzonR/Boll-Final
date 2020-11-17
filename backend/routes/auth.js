// Modulos Internos
const express = require("express");
const router = express.Router();
// Modulos Creados
const {
    RegistroUsuario
} = require("../model/registroUsuario")
// Ruta
router.post("/", async (req, res) => {
    // Validar que el correo existe en DB
    const usuario = await RegistroUsuario.findOne({
        correo: req.body.correo
    });
    // Si el correo no existe
    if (!usuario)
        return res.status(400).send("Correo o contraseña no son validos");
    // Validar que la contraseña existe
    if (usuario.password !== req.body.password)
        return res.status(400).send("Correo o contraseña no son validos");
    // Generar un JWT ya que logró realizar el login
    const jwtToken = usuario.generateJWT();
    res.status(200).send({
        jwtToken
    });
});
module.exports = router;