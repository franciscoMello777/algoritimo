let termoAnterior = 0;
let termoAtual = 1;
let proximoTermo;

console.log("Os 10 primeiros termos da sequência de Fibonacci são:");

for (let i = 1; i <= 10; i++) {
  console.log(termoAnterior);
  proximoTermo = termoAnterior + termoAtual;
  termoAnterior = termoAtual;
  termoAtual = proximoTermo;
}
