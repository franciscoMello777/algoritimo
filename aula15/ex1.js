//Soma de Números Positivos: Crie um programa que imprima o resultado da soma de dois números, apenas se os dois números forem positivos.
const readlineSync = require('readline-sync');


let n1 = readlineSync.question ("coloque um numero ");
let n2 = readlineSync.question ("coloque outro numero ");

function somar(n1, n2){

    if (n1 >=0 && n2 >=0){

    return (Number(n1) + Number(n2))
}else{
    return ("esse numero nao e positivo")
}
}

console.log(somar(n1, n2))