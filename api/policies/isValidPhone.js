/**
 * Policies para validar que el número de nuestros contactos se encuentren 
 * en nuestra plataforma.
 */
module.exports = function(req,res,next){
    var numero = req.param('telefono');
    Users.findOne({phone:numero,activated:true}).exec(function(error,user){
        if(error || !user) return res.json(404,{error:'El usuario no esta en el sistema'});
        if(user){
            req.contacto = user;
            return next();
        }
    });
}