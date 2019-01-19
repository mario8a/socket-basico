var socket = io();

socket.on('connect', function() {

    console.log("conecado al servidor");

});
//on -> escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');

});

//los emit son para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Mario',
    mensaje: 'Hola mundo'

}, function(resp) {
    console.log('Respuesta server: ', resp);

});

//esuchar info
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);

});