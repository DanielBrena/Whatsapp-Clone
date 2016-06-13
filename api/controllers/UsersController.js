/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	active:function(req,res){
        var codigo = req.param('codigo');
        Users.findOne({code:codigo,activated:false}).exec(function(error,user){
            
            if(user){
                user.activated = true;
                user.save(function(e){
                    
                });
                return res.json(user);
            }
        });
    }
};

