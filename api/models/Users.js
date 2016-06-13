/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema:true,
  attributes: {
    //Nombre del usuario
    name:{
      type:'string'
    },
    //Apellidos del usuario
    lastname:{
      type:'string'
    },
    //Número telefonico del usuario
    phone:{
      type:'string',
      required:true,
      unique:true
    },
    //Estado del usuario
    state:{
      type:'string'
    },
    //Imagen de perfil del usuario
    image:{
      type:'string'
    },
    /*Si el usuario ha sido activado a traves de un mensaje a su número
    telefonico.*/
    activated:{
      type:'boolean',
      defaultsTo:'false'
    },
    //Código de verificiación que se envia al usuario en un mensaje de texto.
    code:{
      type:'string',
      unique:true
    },
    //El usuario pertenece a un grupo de contactos de otros usuarios.
    contactsOf:{
      collection:'users',
      via:'contacts'
    },
    //El usuario tiene un grupo de contactos.
    contacts:{
      collection:'users',
      via:'contactsOf'
    },
    //El usuario puede enviar muchos mensajes
    sentMessages:{
      collection:'messages',
      via:'transmitter'
    },
    //El usuario puede recibir muchos mensajes
    receivedMessages:{
      collection:'messages',
      via:'receiver'
    },
    //El usuario puede estar en muchos grupos.
    groups:{
      collection:'groups',
      via:'members',
      dominant:true
    }
  },
  beforeCreate:function(values, cb){
    var codigo = new Date().getTime().toString(32);
    values.code = codigo;
    var mensaje = {};
    mensaje.phone = values.phone;
    mensaje.code = codigo;
    Sms.send(mensaje);
    cb();
  }
};

