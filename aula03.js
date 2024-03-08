//Esse codigo imprime uma mensagem

console.log('Bom dia!')

const nome = 'Francisco'
const idade = 16

console.log("Meu nome é",nome,'e tenho',idade,'anos.')

const altura = 1.90 
const temperatura = 20

let souUmBoolean = true
souUmBoolean = false

const serie = 'game of thrones'
const temporadas = 8
//este comando imprime o tipo do valor 
//pode ser tring, number, boolean
console.log(typeof serie,typeof temporadas)
//conversao 
const idadeNumero = 16
const idadeTexto = idadeNumero.toString()

console.log(typeof idadeNumero)
console.log(typeof idadeTexto)

const idadeTexto2 = '16'
const idadeNumero2 = Number.toString(idadeTexto2)

console.log(typeof idadeTexto2)
console.log(typeof idadeNumero2)

const numero1 = '5'
const numero2 = '2'

console.log(Number(numero1)+Number(numero2))