/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * Método para activar el usuario.
     */
	active:function(req,res){
        var codigo = req.param('codigo');
        Users.findOne({code:codigo,activated:false}).exec(function(error,user){
            
            if(user){
                user.activated = true;
                user.save(function(e){
                    
                });
                return res.json({user:user,token:jwToken.issue({id:user.id,phone:user.phone})});
            }
        });
    },
    /**
     * Método para cambiar el estado del usuario.
     */
    changeStatus:function(req,res){
        var estado = req.param('estado');
        var id = req.token.id;
        Users.update({id:id},{state:estado}).exec(function(error,user){
           return res.json(user);
        });
    },
    /**
     * Método para cambiar la imagen del perfil del usuario.
     */
    changeImage:function(req,res){
        var folder = '/images/perfil';
        var id = req.token.id;
		if(req.file){
            req.file('file').upload({dirname:sails.config.appPath+'/assets'+folder},function(error,files){
				if(error) return error;
				var nameFile =  files[0].fd.split('/');
                nameFile = nameFile[(nameFile.length - 1)];
				var baseUrl = Config.getUrl();
                Users.update({id:id},{image:baseUrl + folder + "/"+nameFile}).exec(function(error,user){
                    return res.json(user);
                });
			});
		}
    },
    /**
     * Método para agregar un contacto.
     */
    addContact:function(req,res){
        var id = req.token.id;
        var contacto = req.contacto;
        Users.findOne(id).exec(function(error,user){
            console.log(user);
            user.contacts.add(contacto.id);
            user.save(function(e){

            });
            return res.json(user);
        });
    }
};

