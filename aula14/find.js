//definiçao do array de numeros 
const numeros = [1, 2, 3, 4, 5];
//numeros que estamos procurando 
const numeroProcurado = 9;
//funcao para verificar se um numero é igual ao numero procurado 
function encontrar(numero){
    return numero === numeroProcurado
}
//filtrando os numeros usando funcao encontrar 
const numerosEncontrados = numeros.filter(encontrar);
/*é uma funcao em javascript que cria um novo array contendo apenas os elementos que passam em um determinado teste, especificando por uma funcao de callback*/

//exibindo os numeros encontrados 
console.log(numerosEncontrados); // saida 3
