/*Bem-vindos ao desafio "Operação JavaScript: La Casa de Papel"!

Você foi convocado para uma missão especial como parte da equipe de desenvolvimento da casa de papel. Sua tarefa é criar um sistema de gerenciamento de informações que simule um banco de dados para os personagens da série e permita aos usuários interagir com essas informações através de um menu de opções.

O programa deve incluir os seguintes componentes:

Banco de Dados Fake:
Você deve criar um "banco de dados" fake utilizando um array. Esse banco de dados vai armazenar informações sobre os personagens da série "La Casa de Papel". Cada objeto no array representará um personagem e terá as seguintes propriedades:
nome: o nome do personagem.
funcao: a função ou papel desempenhado pelo personagem na equipe (por exemplo, Professor, Tóquio, Denver, etc.).
arma: a arma que o personagem usa (por exemplo, metralhadora, granada, etc.).
Menu de Opções:
Você deve implementar um menu de opções que permita ao usuário escolher entre diferentes funcionalidades do sistema. O menu deve ser apresentado no terminal e permitir ao usuário selecionar as seguintes opções:
Visualizar todos os personagens da série.
Adicionar um novo personagem à série.
Atualizar a arma de um personagem.
Verificar a quantidade de explosivos disponíveis.
Sair do programa.
Funcionalidades:
Visualizar todos os personagens da série: Ao selecionar essa opção, o programa deve percorrer o banco de dados e exibir no terminal as informações de todos os personagens.
Adicionar um novo personagem à série: Ao selecionar essa opção, o programa deve solicitar ao usuário que insira o nome, função e arma do novo personagem, e então adicioná-lo ao banco de dados.
Atualizar a arma de um personagem: Ao selecionar essa opção, o programa deve solicitar ao usuário que insira o nome do personagem cuja arma deseja atualizar, e então permitir que o usuário digite a nova arma desse personagem.
Verificar a quantidade de explosivos disponíveis: Ao selecionar essa opção, o programa deve exibir no terminal a quantidade de explosivos disponíveis na Casa da Moeda.
Sair do programa: Ao selecionar essa opção, o programa deve encerrar a execução.
Seu desafio é implementar todas essas funcionalidades em JavaScript, utilizando laços, objetos, arrays, funções e switch para criar um sistema de gerenciamento de informações eficiente e criativo para a série "La Casa de Papel".

Boa sorte, e que o plano seja perfeito!*/

let laCasaDePapel = []

function exibirMenu() {
    console.log("Menu de opções");
    console.log("1: Ver personagens");
    console.log("2: Adicionar personagens");
    console.log("3: Verificar explosivos");
    console.log("4: Atualizar arma de algum personagem");
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

    

    function mostraPersonagens(){
            if (laCasaDePapel.length == 0){
                console.log("Nenhum personagem encontrado")
            }
        console.log(laCasaDePapel)
    }

    function adicionaPersonagem() {
        const personagem = {}
        let nome  = readlineSync.question("digite o nome do personagem: ")
        let funcao = readlineSync.question("digite a funcao do personagem: ")
        let arma = readlineSync.question("digite uma arma:")
        personagem.nome = nome
        personagem.funcao = funcao
        personagem.arma = arma
        laCasaDePapel.push(personagem)
    
    }

function verificaExplosivos() {
const explosivos = 28;
return explosivos
}
    
function atualizarArma() { 
    let nome = readlineSync.question("Escolha o personagem que deseje mudar a arma: ")
let procuraPersonagem = laCasaDePapel.find(personagem => personagem.nome == nome);
if (procuraPersonagem) {
    console.log(procuraPersonagem)
}
let arma = readlineSync.question("atualize a arma: ")
procuraPersonagem.arma = arma
console.log(procuraPersonagem.arma)
}
   

console.log(laCasaDePapel)

function processarEscolha(opção){

    switch(opção) {
        case '1':
            console.log("Você selecionou a opção que mostra personagens")
            mostraPersonagens()
            break;
        case '2':
            console.log("Você selecionou a opção que adiciona personagens")
            adicionaPersonagem()
            break;
        case '3':
            console.log(`Há ${verificaExplosivos()} explosivos dentro da Casa Da Moeda`);
            break;
            case '4':
                atualizarArma();
                break;
                case '5':
                console.log("encerando o programa...")
               return true;
                default:
                    console.log("Opção inválida. Por favor, escolha uma opcao valida");
    }

return false;

}
