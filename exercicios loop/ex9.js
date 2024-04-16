const readlineSync = require('readline-sync');

let numero = readlineSync.question('Digite um numero para calcular sua fatorial: ');
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

console.log(`A fatorial de ${numero} é: ${fatorial}`);