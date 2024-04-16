const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let soma = 0;

rl.question('Digite 5 números separados por espaços: ', (numeros) => {
  const numerosArray = numeros.split(' ').map(Number);
  
  for (let numero of numerosArray) {
    soma += numero;
  }
  
  const media = soma / numerosArray.length;
  console.log("A média dos números digitados é:", media);

  rl.close();
});