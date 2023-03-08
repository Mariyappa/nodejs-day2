const fs = require('fs');

const String1 = "Hello world from node from js "+new Date();

fs.appendFile('./files/info1.txt',String1,(err)=>{

    if(err){
        console.log(err);
    }else{
        console.log("File appended in file successfully");
    }

})