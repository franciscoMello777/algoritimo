const comida = ["hamburguer", "xis", "sushi", "pizza", "batata"];
console.log(comida);

console.log(` Essas são as minhas comidas preferidas:`);
console.log(comida.join("\n"));

const readlineSync = require("readline-sync");
const comidaFavorita = readlineSync.question("qual sua comida preferida? ");

comida.push(comidaFavorita);
console.log(comida.join("\n"));

comida.splice(1, 1);
console.log(comida.join("\n"));