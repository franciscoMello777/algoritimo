function dividirFraseEmPalavras(frase) {
    return frase.split(' ')
  }
  
  const frase = "eu estou com sono";
  const array = dividirFraseEmPalavras(frase);
  console.log(array);