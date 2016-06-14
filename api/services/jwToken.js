var jwt = require('jsonwebtoken');
var tokenSecret = "whatsappsecret";

// Genera un token 
module.exports.issue = function(payload) {
  return jwt.sign(
    payload,
    tokenSecret, // Token Secret 
    {
      expiresIn : 43800 // Token expira en un mes
    }
  );
};

// Verifica el token en un  request
module.exports.verify = function(token, callback) {
  return jwt.verify(
    token, // El token a verificar
    tokenSecret, // Utiliza el token secret para que coincidan
    {},
    callback //Una devolucion de llamada
  );
};