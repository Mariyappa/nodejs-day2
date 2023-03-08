const fs = require('fs');

const args = require('yargs').argv;

fs.readFile('audit.txt','utf8',(err,data)=>{

    if(err){
        console.log(err);
    }else{

        console.log(data," able to read the data successfully");

        const fileArray = data.split('\n');
        if(fileArray.indexOf(args.filename)===-1){
            fs.writeFile(args.filename+".txt","Test Data",(wErr)=>{
                if(wErr){
                    console.log(wErr);
                }else{
                    fs.appendFileSync('audit.txt',args.filename+'\n');

                    console.log("FileName appened successfully in Audit.txt");
                }
            })
        }else{
            console.log("Filename is already present");
        }
    }


})

