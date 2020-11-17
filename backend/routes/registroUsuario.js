// Modulos Node
const express = require("express");
const router = express.Router();
// Modulos creados
const {
    RegistroUsuario
} = require("../model/registroUsuario"); //
// Ruta
router.post("/", async (req, res) => {
    let usuario = await RegistroUsuario.findOne({ //
        correo: req.body.correo,
    });
    // Si encuentra correo en BD
    if (usuario) return res.status(400).send("El correo ya se encuentra registrado");
    // Si el correo no existe en BD
    usuario = new RegistroUsuario({ //
        nombre: req.body.nombre,
        correo: req.body.correo,
        tipoDocumento: req.body.tipoDocumento,
        numeroIdentificacion: req.body.numeroIdentificacion,
        telefono: req.body.telefono,
        password: req.body.password,
    });
    // Guardar con jwt
    const result = await usuario.save();
    const jwtToken = usuario.generateJWT();
    res.status(200).send({
        jwtToken
    });
});
// Exports
module.exports = router;