// Modulos Node
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// Modulos Creados
const usuario = require("./routes/registroUsuario");
const auth = require("./routes/auth");
const imagenPerfil = require("./routes/imagenPerfil");
// App
const app = express();
app.use(cors())
app.use(express.json());
app.use("/api/usuario/", usuario);
app.use("/api/auth/", auth);
app.use("/api/imagenperfil", imagenPerfil);
// Puerto para ejecutar servidor
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Ejecutando en el puerto " + port));

// Conexión con Mongo
mongoose
    .connect("mongodb://localhost/bolldb", {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Conexión a MongoDB: Online")
    })
    .catch((error) => {
        console.log("Conexión a MongoDB: Offline")
    });