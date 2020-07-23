var fs = require("fs");

fs.unlink( './archivos/archivox.txt' , (error)=>{

    if(error){
        console.log("error");
    }else{
        console.log("ok");
    }
    
})