let idade = 18
let curso = 0 
let ensinoMedio = true

let maiorIdade = 18 

let maior = (idade >= maiorIdade)
let outroCurso = (curso === 0)

if (maior && ensinoMedio && outroCurso){
    console.log("Parabéns, você pode entrar na faculdade")
}else {
    console.log("infelizmente, voce nao poderá participar")
}