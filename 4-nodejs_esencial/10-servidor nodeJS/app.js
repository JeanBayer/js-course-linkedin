var http = require('http');

var servidor = http.createServer( function(peticion, respuesta ){ 

    respuesta.writeHead( 200 , {'Content-type': 'text/html'});
    respuesta.write("Respuesta para la direccion: " + peticion.url );

    console.log( "petición web");
})

servidor.listen(3000);

console.log("Ejecutando servidor NodeJS");


