let professor = {
    nome: "leo",
    idade: 27,
    tarefas: ["Dar aula", "responder dúvidas"],
    contarPiada: function() {
        console.log("É pa vê ou pa come?")
    }
}
console.log(professor.nome) 
console.log(professor.nome, professor.idade)
professor.contarPiada()

let professor1 = {
    nome: "leo",
    idade: 27,
    email: "leo@gmail.com"
}
console.log(professor1["email"])

professor1.nome = "Vitor"
professor1["email"] = "vitor@gmail.com"

const donoDoPet = {
nome: "leo",
pet:{
    nomeDoPet: "Wanda",
    raca: "Vira-lata",
    idade: 1
}
}
console.log(donoDoPet.pet.nomeDoPet)

const curso = {
    nome: "Noturno Frontend",
    linguagens: ["JS", "CSS", "HTML"]
}
console.log(curso.linguagens[0])

const professores = [
    {nome: "Andrei", modulo: 1},
    {nome: "Vitor", modulo: 2},
    {nome: "Mina", modulo: 3}
]
console.log(professores[1].nome)

const curso1 = {
    nome: "UC2-ALGORITMOS",
    linguagens: ["JS"]
}

curso1.numerosEstudantes = 50
curso1["numerosEstudantes"] = 50
console.log(curso1)

const usuario = {
    nome:"Prof",
    idade: 25,
    email: "prof@senacrs.com.br",
cidade:"São Paulo"
}
const novoUsuario = {
    ...usuario,
    nome: "João",
    idade: 28
}
console.log(novoUsuario)

const listaDeNomes = ["Mika", "Paula", "Vitor"]
const copiaListaDeNomes = [...listaDeNomes]

console.log(copiaListaDeNomes)