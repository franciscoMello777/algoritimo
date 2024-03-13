const variavel1 = 50
const variavel2 = 35

//igual; ===
console.log(variavel1 === variavel2) //false
console.log(variavel1 === (2*25)) //true
console.log(variavel1 === 50) //true

//diferente !==
//verifica se os dois são diferentes
console.log(variavel1 !== variavel2) //true

//maior >
//verifica se o valor da esquerda é maior que a da direita
console.log(variavel1 > variavel2) //true
console.log(variavel2 > variavel1) //false

//maior ou igual e >=
//verifica se o valor da esquerda é maior ou igual ao da direita
console.log(variavel1 >= variavel2) //true
console.log(50 >= 35) //true
console.log(50 >= 50) //true
console.log(35 >= 50) //false

//menor <
//verifica se o valor da esquerda é menor do que da direita
console.log(variavel1 < variavel2) //false
console.log(23 < 90) //true

//menor ou igual <=
//verifica se o valor da direita é maior ou igual ao da esquerda
console.log(variavel1 <= variavel2) //false
console.log(variavel1 <= 50) //true
