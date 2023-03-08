const fs = require('fs');

const String1 = "Hello world from node from js Write 3 :: "+new Date();

fs.writeFile('./files/info3.txt',String1,(err)=>{

    if(err){
        console.log(err);
    }else{
        console.log("Write in new file successfully");
    }

})