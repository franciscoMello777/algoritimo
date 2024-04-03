const readlineSync = require('readline-sync'); // readline

const frase = readlineSync.question("Digite uma frase: "); //"Subi num ônibus em Marrocos"? = subi num onibus em mirrocos

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length); //altera as letras a por i