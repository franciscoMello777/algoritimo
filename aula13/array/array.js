
//sao listas de elementos que tem contagem numerica que começa no 0 até §

const listaDeCompras = ["batata", "alface", "queijo" ];
const listaDeNumeros = [2, 13, 45, 87, 98, 90];
const meuArray = ["batata", 2, true]

console.log(listaDeCompras)
console.log(listaDeNumeros)
console.log(meuArray)

const SegundoItem = listaDeCompras[2] //queijo, pois sempre começa no 0
console.log(SegundoItem)

//adiciona mais um elemento no array ja criado

const numeros = [1, 2, 3]
numeros.push(4)
console.log(numeros) //1 2 3 4
numeros.push(5, 6, 7) //1 2 3 4 5 6 7 
console.log(numeros)

//tira o ultimo elemento do array

const meusPeixes = ["palhaço", "mandarin", "salmao"]
meusPeixes.pop()
console.log(meusPeixes)

//

const letras = ["a", "b", "c", "d", "e", "f", "g", "h"]
// indices (i)   0    1    2    3    4    5    6    7

letras.splice(2, 1)
//      letras ["a", "b", "d", "e", "f", "g", "h"]
// indices (i)   0    1    2    3    4    5    6    

letras.splice(3, 2)
//letras = a b d g h

