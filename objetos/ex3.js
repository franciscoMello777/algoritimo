let filme = {
    diretor: "John Lasseter",
    nome: "carros",
    ano: 2006,
    elenco: ["McQueen", "Mater", "Sally Carrera"],
    assistiu: true
}
filme.atores = ["Owen Wilson ", "Larry the Cable Guy ", "Bonnie Hunt"]
console.log(filme.elenco + "\n", filme.atores + "\n")

filme.elenco[0] = "xuxa"

console.log(filme)