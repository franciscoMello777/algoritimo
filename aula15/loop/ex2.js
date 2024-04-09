const readlineSync = require('readline-sync');
let num
let resultado = 0
while (num != 0 ) {
    num = Number(readlineSync.question ("coloque um numero "));
    
    resultado += num
    }
console.log(resultado)
