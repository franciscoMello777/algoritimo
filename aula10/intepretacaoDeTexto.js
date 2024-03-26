function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

//a) vai ser impresso 10 e 50.

//b) se retirar os consoles.log e colocar função minhaFuncao(2) e minhaFuncao(10) vai retornar 10 e 50.

//2

let textoDoUsuario = prompt("insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//a)é tranformar o texto em maiusulo e minusculo e ver se existe a palavra cenoura no texto.

//b)true, true e false