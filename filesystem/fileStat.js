const fs = require('fs');

const String1 = "Hello world from node from js "+new Date();

fs.stat('./files/info1.txt',(err,stats)=>{

    if(err){
        console.log(err);
    }else{
        console.log(stats);
        console.log("Is it a file : "+stats.isFile());
        console.log("Is it a directory : "+stats.isDirectory());
    }

})