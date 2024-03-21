const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("escreva um numero", (n) => {
    
    if (n > 0){console.log("positivo")}
    else if (n === 0){console.log("zero")}
    else if (n < 0){console.log("negativo")}

});
