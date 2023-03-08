const fs = require('fs');

const oldPath = "./files/info.txt";
const newPath = "./files/info1.txt";
fs.rename(oldPath,newPath,(err)=>{
    if(err){

        console.log(err);

    }else{
        
        console.log('file renamed succcessfully')
    }
})