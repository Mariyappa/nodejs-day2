const fs = require('fs');
const allocatedBuffer = Buffer.alloc(100);

fs.open('./files/info2.txt','r+',(err,fileDescriptor)=>{

    if(err){

        console.log(err);
    }else{

        console.log(fileDescriptor,"file opened successfully");

        //filedescriptor - returned by fs.open
        //allocatedbBuffer - for temperory storage
        // offset - buffer starting point
        //allocatedBuffer.length = length of the Buffer
        //postion - from where read operation should start from
        //Subsequent action reading
        fs.read(fileDescriptor,allocatedBuffer,0,allocatedBuffer.length,0,(rerr,bytes)=>{
            if(rerr){
                console.log(rerr);
            }else{
                console.log(bytes," bytes read");
                if(bytes>0){
                    console.log(allocatedBuffer.slice(0,bytes).toString())
                }

            }
        })    
    }
}
)


