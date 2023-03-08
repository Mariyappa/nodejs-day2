const fs = require('fs');

console.log('Hello - Process 1');

try {
    var data = fs.readFile('./files/info3.txt')
    console.log(data);
    
} catch (error) {
    console.log("Hello - Error : Process 3");
}



console.log('Hello - Process 2');