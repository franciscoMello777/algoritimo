const respostaDoUsuario = "90" 
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
     console.log("Passou no teste.") } 
else { 
    console.log("Não passou no teste.") }
    // 1. a) Explique o que o código faz. Qual o teste que ele realiza? 
// Este código recebe uma resposta do usuário, que é armazenada na variável respostaDoUsuario. Em seguida, converte essa resposta para um número usando Number() e armazena na variável numero. Então, ele verifica se o número é par usando o operador de módulo %. Se o resto da divisão por 2 for igual a 0, significa que o número é par, então ele imprime "Passou no teste.". Caso contrário, imprime "Não passou no teste.".

//b) Para que tipos de números ele imprime no console "Passou no teste"? 
//  Ele imprime "Passou no teste" para números pares, ou seja, números que têm resto 0 quando divididos por 2.

//c) Para que tipos de números a mensagem é "Não passou no teste"?
// Ele imprime "Não passou no teste" para números ímpares, ou seja, números que têm resto diferente de 0 quando divididos por 2.


2.//O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

//```jsx
let fruta
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)//

//a) Para que serve o código acima?
//para calcular o valor de cada fruta e o nome de cada uma delas.

//b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
//Se o valor da variável fruta for "Maçã", o código atribuirá o preço de 2.25 à variável preco e então imprimirá a mensagem no console.

//c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
//Se retirarmos o break logo acima do default (aquele indicado pelo comentário "BREAK PARA O ITEM c."), o código não parará a execução do switch nesse ponto e continuará executando os casos abaixo. Nesse caso, se o usuário desejar comprar uma Pêra, o código atribuirá o preço de 5.5 à variável preco e então imprimirá a mensagem no console. No entanto, isso significa que mesmo se a fruta for "Pêra", ele continuará verificando os casos abaixo do default, o que pode resultar em comportamento indesejado, a menos que haja uma lógica específica para isso.

//Leia o código abaixo:
//const numero = Number(("50"))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

//a) O que a primeira linha está fazendo?
//A primeira linha troca a palavra "50" para um número

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//// se o número fosse dez, a mensagem impressa seria "esse número passou no teste". Se o número fosse -10, a mensagem impressa seria "esta mensagem é secreta" pos não passará no teste.

//c) Haverá algum erro no console?
//Sim, haverá um erro no console. Quando tentamos acessar a variável mensagem fora do bloco de código onde ela foi declarada, ocorrerá um erro de referência não definida. Isso porque a variável mensagem foi declarada dentro do escopo do bloco if, tornando-se inacessível fora desse bloco. Portanto, o console exibirá uma mensagem de erro indicando que mensagem não está definida.