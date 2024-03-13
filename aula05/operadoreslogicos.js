//operador E (AND) &&
//retorna true se, e somente, se todos os booleans envolvidos tambem forem true

true && true //true
false && true //false
true && false //false
false && false //false

const var1 = 50
const var2 = 50
const var3 = 25

console.log(var1 === var2 && var1 > var3)

const a = true
const b = false
const c = true

console.log(a && b) //false
console.log(b && c) //false
console.log(a && c) //true
console.log(a && b && c) //false

//operador OU (OR) ||
//retorna false se, e somente se, todos os boolens envolvidos tambem forem false 

const d = true
const e = false
const f = true

console.log(d || e) //true
console.log(e || f) //true
console.log(d || f) //true
console.log(d || e || f) //true

//operador nao (not) !
//sempre retorna o boolean oposto 

!true //false
!false //true

