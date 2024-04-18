//A

const pessoa = {    
    nome:"francisco",
    apelido: ["fran", "kiki", "chico"]
} 

function eu (pessoa) {
console.log("eu sou", pessoa.nome, ", mas pode me chamar de:",pessoa.apelido[0],",", pessoa.apelido[1],"ou", pessoa.apelido[2])

}
(eu(pessoa))

//B
   const novoEu = {
   ...pessoa,
    apelido: ["cisco", "augusto", "iko"]
}
console.log(novoEu)