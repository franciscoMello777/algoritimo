function maiorNumero (array){
    
let maior = 0

    for (let num = 0; num < array.length; num++){
if (array[num] > maior)
maior = array[num]
 }
return ("o maior numero é " + maior)
}
let numeros = [10, 20, 30, 40, 50]
console.log(maiorNumero(numeros))