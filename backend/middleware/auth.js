// Modulos Internos
const jwt = require("jsonwebtoken");
// Validación para identificar el usuario logueado y sus procesos
function auth(req, res, next) {
    let jwtToken = req.header("Authorization");
    // Split al JWT para separar el Beare que pone por defecto el header del Auth
    jwtToken = jwtToken.split(" ")[1];
    //Si el token no existe
    if (!jwtToken) return res.status(405).send("No hay token para un acceso");
    // Si el token existe, validar el token
    try {
        const payload = jwt.verify(jwtToken, "secretkey");
        req.usuario = payload;
        next();
    } catch (error) {
        res.status(405).send("Token sin autorización");
    }
}
// Exports
module.exports = auth;