const readlineSync = require("readline-sync");

let maiorNumero = 0
let menorNumero = 0
for(let i = 0; i <=10 ;i ++ ){

let pergunta = Number(readlineSync.question(`digite o ${i} numero:`))
if (pergunta > maiorNumero){
maiorNumero = pergunta
}
if (pergunta < menorNumero){
    menorNumero = pergunta
}
}
console.log("O menor numero é", menorNumero, "e o maior é",maiorNumero)