function verificarNumero(numero) {
    if (numero > 0) {
        return "positivo";
    } else if (numero === 0) {
        return "zero";
    } else {
        return "negativo";
    }
}
let resultado = verificarNumero(10)
console.log(resultado)