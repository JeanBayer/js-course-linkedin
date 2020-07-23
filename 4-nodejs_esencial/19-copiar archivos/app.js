var fs = require("fs");


fs.copyFile('./archivos/archivo_original.txt' ,  './archivos-nuevos/archivo_nuevo.txt' , (error)=>{
    if(error){
        console.log("error al copiar");
        throw error;
    }else{
        console.log("copia OK");
    }
})

