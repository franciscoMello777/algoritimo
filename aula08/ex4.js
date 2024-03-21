const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("senha do usuario", (senhaUsuario) => {

    const senha = "12"

if (senha === senhaUsuario){console.log("login bem-sucedido")}
else {console.log("login negado")}

    rl.close();
});
