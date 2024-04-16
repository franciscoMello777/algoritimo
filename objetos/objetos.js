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