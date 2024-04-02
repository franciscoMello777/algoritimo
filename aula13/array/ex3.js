const pers = ["nemo", "dory", "tubarao", "peixe"]

function personagens(pers) {
   let aleatorio = Math.floor(Math.random() * pers.length);
   return pers[aleatorio];
}
let personagemSorteado = personagens(pers);
console.log(personagemSorteado);