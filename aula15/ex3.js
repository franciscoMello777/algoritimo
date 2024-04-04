//Divisão por Não Zero: Crie um programa que imprima o resultado da divisão de dois números, apenas se o divisor não for zero.
const readlineSync = require('readline-sync');


let n1 = readlineSync.question ("coloque um numero ");
let n2 = readlineSync.question ("coloque outro numero ");

function divi(n1, n2){

    if (n2 > 0) {
        return n1 / n2;
      } else {
        return "nao pode ser 0"
}
}
console.log(divi(n1, n2));