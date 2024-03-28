function usuario(nome, idade) {
    
    if (idade => 18) {
        return "cadastrado com sucesso. "
    } else {
    return "O usuário deve ser maior de idade para se cadastrar. "
    }
}

let login = usuario("franciso" + 19)
console.log(login)

function consultar(nome, idade) {

    if (nome === login) {
    return "está cadastrado. ";
    } else {
        return "usuário não encontrado. ";
    }
    
}

let consulte = consultar("francisco" + 19)
console.log(consulte)