/**
 * MessagesController
 *
 * @description :: Server-side logic for managing messages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * Método para crear un mensaje.
     */
	create:function(req,res){
        var mensaje = req.param('mensaje');
        var id = req.token.id;
        var receptor = req.param('receptor');
        var grupo = req.param('grupo');
        Users.findOne(id).exec(function(e,user){
            if(receptor){
                user.sentMessages.add({message:mensaje,transmitter:id,receiver:receptor});
            }else{
                user.sentMessages.add({message:mensaje,transmitter:id,group:grupo});
            }
            user.save(function(){});
            res.json(user);
        });
    }
};

