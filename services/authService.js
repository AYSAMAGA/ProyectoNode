const jwt = require("jsonwebtoken");

// Almacenamos nuestra clave secreta

const JWT_SECRET =
  "efe3a4d343d91bf1125cf69ba58c97b8abc3f8281dbed450c3ae0b5d4ad03f72";

// Creamos una funcion para generar un token JWT

function generateToken(user) {
  const payload = {
    userId: user._id,
    email: user.email,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
  return token
}

module.exports= {
    generateToken
}