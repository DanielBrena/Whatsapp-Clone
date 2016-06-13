/**
 * Messages.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema:true,
  attributes: {
    //Contenido del mensaje.
    message:{
      type:'string',
      required:true
    },
    //Quien envia el mensaje.
    transmitter:{
      model:'users'
    },
    //Quien recibe el mensaje.
    receiver:{
      model:'users'
    },
    //El mensaje es enviado a un grupo en especifico.
    group:{
      model:'groups'
    }
  }
};

