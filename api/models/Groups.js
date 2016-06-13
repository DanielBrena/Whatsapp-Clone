/**
 * Groups.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema:true,
  attributes: {
    //Nombre del grupo
    name:{
      type:'string',
      required:true
    },
    //El grupo contiene miembros.
    members:{
      collection:'users',
      via:'groups'
    },
    //El grupo almacena muchos mensajes.
    messages:{
      collection:'messages',
      via:'group'
    },
    //El grupo es creado por un usuario.
    creator:{
      model:'users'
    }
  }
};

// Users.findOne(4).populate('sentMessages',{receiver:6}).populate('receivedMessages',{transmitter:6}).exec(console.log);
//Users.findOne(5).exec(function(e,u){u.sentMessages.add({message:'si',transmitter:5,receiver:4});u.save(function(){});});