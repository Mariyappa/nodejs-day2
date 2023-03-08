const fs = require('fs');
const allocatedBuffer = Buffer.alloc(100);

fs.open('./files/info2.txt','r+',(err,fileDescriptor)=>{

    if(err){

        console.log(err);
    }else{

        console.log(fileDescriptor,"file opened successfully");        
    }
}
)


