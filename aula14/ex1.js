let array //cria um array
console.log('a. ', array) // imprime "a." e undefined.

array = null // o array ganha um valor que no caso é nulo.
console.log('b. ', array) //imprime "b. " e nulo

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] //muda a variavel para uma lista de numero[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) //imprime "c. " e quantos caracteres tem no array.

let i = 0 // criando variavel i = 0
console.log('d. ', array[i])// imprimindo "d." e 3, que é o valor de i

array[i+1] = 19 // array se torna 1 que é igual a 4, e a variavel ta tornando ele = 19
console.log('e. ', array)// imprime e. 19

const valor = array[i+6] // tornando o valor da array 6
console.log('f. ', valor) // imprime f e o valor que é 9