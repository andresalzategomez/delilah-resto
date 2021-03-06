const jwt = require("jsonwebtoken");
const sequelize = require("../conexion");
require("dotenv").config();

const verifyToken = async (req, res, next) => {
  const token = req.header("Authorization").split(" ")[1]
  
  if (!token) {
    return res.status(401).json({ error: "Acceso denegado" });
  } 
    try {
      const verify = jwt.verify(token, process.env.TOKEN_SECRET);

      req.user = verify;
      next();
    } catch (error) {
      res.status(400).json({ error: "Token no válido" });
      console.log(error);
    }
};

const isAdmin = async (req, res, next) => {
  const token = req.header("Authorization").split(" ")[1]

  const verify = jwt.verify(token, process.env.TOKEN_SECRET);
  if (verify.id_role === 1) {
    next();
    console.log(verify.nombre);
    return;
  }

  return res.status(403).json({ message: "Require admin role" });
};

exports.verifyToken = verifyToken;
exports.isAdmin = isAdmin;
