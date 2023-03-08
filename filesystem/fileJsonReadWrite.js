const fs = require('fs');
//read the users.json and modify and update the user 
fs.readFile('./files/users.json',(err,data)=>{
    if(err){
        console.log(err);

    }else{
        const users = JSON.parse(data);
        users[1].designation = "Senior Developer";
        fs.writeFile('./files/users.json',JSON.stringify(users),(writeError)=>{
            if(writeError){
                console.log(writeError);
            }else{
                console.log("Write JSON Users Sucessfull");
                
            }
        })
    }
})