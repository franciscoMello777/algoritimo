let pessoa = {
    nome: "Erica",
    idade: 16,
    generoMusical: "sertanejo"
    }

function pessoas (objeto) {
    let novoObjeto = {
        ...objeto,
        listaDeComidas: ["Batata frita", "Hamburguer", "Pizza"],
        nome: "Maria",
        idade: 18
    }

    console.log("O nome da pessoa é", pessoa.nome, "e suas comidas favoritas são", novoObjeto.listaDeComidas[0], "," ,novoObjeto.listaDeComidas[1] ,"e",novoObjeto.listaDeComidas[2],".", "Seu melhor amigo se chama", novoObjeto.nome, "e tem", novoObjeto.idade, "anos." )
}
pessoas(pessoa)