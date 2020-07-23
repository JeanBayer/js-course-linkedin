var fs = require("fs");

fs.readFile('./archivos/texto.txt', 'utf8' , (error, datos)=>{
   

    if(error){

        console.log("error de lectura");

    }else{
        console.log(datos)
    }
   
    


})