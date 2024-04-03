let listaDeTarefas = [];
const readlineSync = require("readline-sync");
let tarefa1 = readlineSync.question ("qual e uma tarefa que voce faz todos os dias ?");
let tarefa2 = readlineSync.question ("qual e outra tarefa que voce faz ?");
let tarefa3 = readlineSync.question ("qual e outra tarefa que voce faz ?");

listaDeTarefas.push(tarefa1);
listaDeTarefas.push(tarefa2);
listaDeTarefas.push(tarefa3);
console.log(listaDeTarefas);

let tarefa4 = readlineSync.question('qual vc ja fez ?')
let n1 = tarefa4 - 1
listaDeTarefas.splice(n1,1)
console.log(listaDeTarefas)