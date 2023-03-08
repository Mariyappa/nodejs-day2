const fs = require('fs');

console.log('Hello - Process 1');

fs.readFile('./files/info3.txt',(err,data)=>{

    if(err){
        console.log('Hello - Process 3');
    }else{
        console.log(data);
    }

})

console.log('Hello - Process 2');