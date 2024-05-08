const jwt = require("jsonwebtoken");
function verifyToken(req, res, next) {
  return new Promise((resolve, reject) => {
    const token = req.headers.authorization;
    if (!token) {
      reject({
        status: 401,
        message: "Token de autenticacion no proporcionado",
      });
    }
    jwt.verify(
      token.split(" ")[1],
      "efe3a4d343d91bf1125cf69ba58c97b8abc3f8281dbed450c3ae0b5d4ad03f72",
      (error, decodedToken) => {
        if (error) {
          reject({ status: 401, message: "Token de autenticacion no valido" });
        } else {
          req.userId = decodedToken.userId; // Agregamos el ID de usuario decodificado para su posterior uso
          resolve();
        }
      }
    );
  })
    .then(() => next()) // Continua el seguimiento del siguiente middleware o del siguiente controlador
    .catch((error) =>
      res.status(error.status || 500).json({ message: error.message })
    );
}
module.exports = verifyToken;