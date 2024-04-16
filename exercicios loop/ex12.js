let resultadoDesejado = "cara"; // ou "coroa"
let resultado;
let tentativas = 0;

while (resultado !== resultadoDesejado) {
  let aleatorio = Math.random();
  if (aleatorio < 0.5) {
    resultado = "cara";
  } else {
    resultado = "coroa";
  }
  tentativas++;
}

console.log(`Você obteve o resultado desejado "${resultadoDesejado}" após ${tentativas} tentativas.`);