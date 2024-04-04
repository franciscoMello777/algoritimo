//Multiplicação com Número Par: Crie um programa que imprima o resultado da multiplicação de dois números, apenas se pelo menos um dos números for par.
const readlineSync = require('readline-sync');


let n1 = readlineSync.question ("coloque um numero ");
let n2 = readlineSync.question ("coloque outro numero ");

function multi(n1, n2){

    if (n1 % 2 === 0 || n2 % 2 === 0) {
        return n1 * n2;
      } else {
        return "os dois sao impares "
      }
}

console.log(multi(n1, n2));