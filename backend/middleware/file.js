const multer = require("multer");
// Ruta de directorio
const directorio = "./public";
// DiskStorage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, directorio);
    },
    filename: (req, file, cb) => {
        const filename =
            Date.now() +
            "-" +
            file.originalname.toLocaleLowerCase().split(" ").join("-");
        cb(null, filename);
    },
});
// Cargar Imagen
const cargarImagenPerfil = multer({
    storage: storage,

    fileFilter: (req, file, cb) => {
        if (
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg" ||
            file.mimetype == "image/png" ||
            file.mimetype == "image/gif"
        ) {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(
                new Error("Solo se aceptan extensiones .jpg - .jpeg - .png - .gif")
            );
        }
    },
});
module.exports = cargarImagenPerfil;