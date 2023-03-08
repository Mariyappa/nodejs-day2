const fs = require('fs');

fs.unlink('./files/delete.txt',(err)=>{

    if(err){

        console.log(err);

    }else{

        console.log("file deleted successfully")

    }

})
