/**
 * Policies para verificar que nuestra cuenta este activada.
 */
module.exports = function(req,res, next){
    var token;
    if(req.headers && req.headers.authorization){
        var cabecera = req.headers.authorization.split(' ');
        if(cabecera.length == 2){
            var esquema = cabecera[0];
            var credenciales = cabecera[1];
            if (/^Bearer$/i.test(esquema)) {
                token = credenciales;
            }
            
        }else{
           return res.json(401,{error:'Formato de Authorization es: Bearer [token]'});
        }
        
        
    }else{
        return res.json(401,{error:'No Authorization header'});
    }
    
    jwToken.verify(token, function (err, token) {
        if (err) return res.json(401, {err: 'Token invalido'});
        Users.findOne({id:token.id,phone:token.phone,activated:true}).exec(function(error,user){
            if(!user){
                return res.json(401,{error:'Necesitas activar tu cuenta'});
            }
            req.token = token; // Desencripta el token
            next();
        });
       
    });

}