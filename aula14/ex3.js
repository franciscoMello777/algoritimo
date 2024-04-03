const readlineSync = require("readline-sync");

const nome = readlineSync.question ("qual seu nome? ");
const email = readlineSync.question ("qual seu email? ");


console.log(`O email ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}.`);
