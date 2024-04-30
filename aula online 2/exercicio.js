let informaçõesDoDoador = []

function exibirMenu() {
    console.log("Menu de opções");
    console.log("1: Cadastrar doador");
    console.log("2: lista dos doadores");
    console.log("3: Buscar doador por tipo sanguineo");
    console.log("4: Buscar doador por data");
    console.log("5: sair");

}

const readlineSync = require('readline-sync');

function main(){
    let encerrar = false;
    
    while(!encerrar){
        exibirMenu();
    let opcao = readlineSync.question ('Escolha uma opcao : ')
    
    encerrar = processarEscolha(opcao)
    } 
    }
    main();    

    


    function adicionarDoador() {
        const doador = {}
        let nome  = readlineSync.question("digite o nome: ")
        let idade = readlineSync.question("digite a idade: ")
        let peso = readlineSync.question("digite o peso: ")
        let tipoSanguineo = readlineSync.question("digite o tipo sanguineo: ")
        let data = readlineSync.question("digite a data da ultima doacao de sangue: ")
        doador.nome = nome
        doador.idade = idade
        doador.peso = peso
        doador.tipoSanguineo = tipoSanguineo
        doador.data = data
        informaçõesDoDoador.push(doador)
    
    }

    function mostraDoadores(){
        if (informaçõesDoDoador.length == 0){
            console.log("Nenhum doador encontrado")
        }
    console.log(informaçõesDoDoador)
}

function buscaDoador(){
    let tipoSanguineo = readlineSync.question("digite o tipo sanguineo que procura: ")
    let doadorEncontrado = informaçõesDoDoador.find(doador => doador.tipoSanguineo == tipoSanguineo)
    if (doadorEncontrado){
        console.log(doadorEncontrado)
}else {
    console.log("Nenhum doador encontrado")
}
}

function buscaDoadorData(){
    let data = readlineSync.question("digite a data que procura: ")
    let doadorEncontrado2 = informaçõesDoDoador.find(doador => doador.data == data)
    if (doadorEncontrado2){
        console.log(doadorEncontrado2)
}else {
    console.log("Nenhum doador encontrado")
}
}

    function processarEscolha(opção){

        switch(opção) {
            case '1':
                console.log("Você selecionou a opção que cadastra doadores")
                adicionarDoador()
                break;
            case '2':
                console.log("Você selecionou a opção que mostra a lista de doadores")
                mostraDoadores()
                break;
            case '3':
                buscaDoador();
                break;
                case '4':
                    buscaDoadorData();
                    break;
                    case '5':
                    console.log("encerando o programa...")
                   return true;
                    default:
                        console.log("Opção inválida. Por favor, escolha uma opcao valida");
        }
    
    return false;
    
    }
    