const bool1 = true 
const bool2 = false 
const bool3 = !bool2

let resultado = bool1 && bool2 //false
 console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 //false
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool2)//true
 console.log("c. ", resultado)

console.log("d. ", typeof resultado) //boolean

