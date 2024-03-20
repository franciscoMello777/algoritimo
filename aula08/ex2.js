const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Qual a sua idade? ", (idade) => {
if (idade >= 18){
console.log("maior de idade")
    }else {
        console.log("nao e maior")
    }
    rl.close();
});
