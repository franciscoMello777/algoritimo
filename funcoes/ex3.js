const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("quais foram suas notas? ", (n1) => {
    rl.question("quais foram suas notas? ", (n2) => {
        rl.question("quais foram suas notas? ", (n3) => {

    function media (nota1,nota2,nota3){
        const soma = (nota1 + nota2 + nota3)
        const media = (soma / 3)
        console.log(media)
    }       
    media(n1, n2, n3)
});
});
});
    