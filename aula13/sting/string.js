const nome = "Mika"
const idade = 27
const frase = "meu nome é " + nome + " e tenho " + idade + "idade.";

//concatenaçao

const palavra1 = "fran"
const palavra2 = "cisco"
console.log(palavra1 + palavra2);

const nome1 = "francisco"
const idade1 = 16
//"meu nome é " + nome + " e tenho " + idade + "idade."
console.log(`meu nome é ${nome1} e tenho ${idade1} idade.`)

//diz qual é o numero de caracteres da string.

console.log(nome1.length) 

//frase minuscula.

const frase1 = "OieEeEee!"
const fraseMinuscula = frase1.toLowerCase() 
console.log(fraseMinuscula)

//frase maiuscula.

const fraseMaiuscula = frase1.toLocaleUpperCase() 
console.log(fraseMaiuscula)

const email = "                 franciscopesdemello@gmail.com                      "
console.log(email.trim()) 

//tira os espaços do começo e do final.

const frase2 = "Hoje comi cenoura"
console.log(frase2.includes("cenoura")) //true
console.log(frase2.includes("batata")) //false

//substitui a palavra

const frase3 = "Hoje comi cenoura, adoro cenoura"
const novaFrase = frase3.replaceAll("cenoura", "batata")
console.log(novaFrase)

//

