
let idade = 16 
//se 
if (idade <= 18) {
console.log("Você é menor de idade!")
} else {//se não
   console.log("Você é maior de idade!")
}
//if vai condicao, o else if vai condicao e o else nao precisa

let paisDeOrigem = "EUA"
if(paisDeOrigem === "brasil"){
    console.log("brasileiro")
} else if (paisDeOrigem === "inglaterra"){
    console.log("ingles")
} else if (paisDeOrigem === "frança"){
    console.log("frances")
} else {
    console.log("nacionalidade nao encontrada")
}


let paisDeOrigem2 = "brasil"
switch (paisDeOrigem2){
    case "brasil":
        console.log("brasileiro")
        break
        case "inglaterra":
            console.log("ingles")
            break
            case "EUA":
                console.log("norte americano")
                break
                default:
                    console.log("nacionalidade nao encontrada")
                    break
}

let charmander 