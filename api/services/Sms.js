var plivo = require('plivo');
var p = plivo.RestAPI({
  authId: 'MANZE2YMRIYTIYYMNHMJ',
  authToken: 'NmNhYmU5OTk0MTc0NTM5MTY4MzM3OGU0OTRjOWZh'
});

module.exports = {
    send:function(mensaje){
        var params = {
            'src': '+529511832743',//Número origin
            'dst' : mensaje.phone,//Número destino
            'text' : "Hola bienvenido a Whatsapp clone, tu código es: " + mensaje.code //Contenido del mensaje
        };
        
        p.send_message(params, function (status, response) {
            console.log('Status: ', status);
            console.log('API Response:\n', response);
        });
        
    }
}