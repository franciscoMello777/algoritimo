let nome = 'francisco' //escopo global

function chamaNome () {
    console.log(nome) //escopo local 
    function imprimeFrase(){
        console.log(`Olá ${nome}, como vai?`)
    }
    imprimeFrase()
}

chamaNome()

const a = 1 //escopo global

function imprimeVariavel () {
    const b = 2 //escopo local
    console.log('variavel a', a)
    console.log('variavel b', b)
}

imprimeVariavel()

console.log('variavel a', a)
//console.log('variavel b', b)

