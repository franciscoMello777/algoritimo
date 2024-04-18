/*1.  Leia o código abaixo
    
  ```jsx
    const filme = {
    	nome: "Auto da Compadecida", 
    	ano: 2000, 
    	elenco: [
    		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
    		"Virginia Cavendish"
    		], 
    	transmissoesHoje: [
    		{canal: "Telecine", horario: "21h"}, 
    		{canal: "Canal Brasil", horario: "19h"}, 
    		{canal: "Globo", horario: "14h"}
    		]
    }
    
    console.log(filme.elenco[0]) vai ser impresso só o matheus nachtergaele
    console.log(filme.elenco[filme.elenco.length - 1])vai ler virginia cavendish porque é negativo dai fica de tras para frente 
    console.log(filme.transmissoesHoje[2])vai ler globo 14h
    ```
    
    a) O que vai ser impresso no console?*/


    /* 2. Leia o código abaixo
    
    ```jsx
    const cachorro = {
    	nome: "Juca", 
    	idade: 3, 
    	raca: "SRD"
    }
    
    const gato = {...cachorro, nome: "Juba"}
    
    const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
    
    console.log(cachorro)
    console.log(gato)
    console.log(tartaruga)
    ```
    
    a) O que vai ser impresso no console? Primeiro vai ler juca, 3 e SRD dps ler juba, 3 e SRD e dps jubo, 3 e SRD
    
    b) O que faz a sintaxe dos três pontos antes do nome de um objeto? ele puxa as informaçoes do objeto.  */

    // 3. Leia o código abaixo
    
    
    function minhaFuncao(objeto, propriedade) {
    	return objeto[propriedade]
    }
    
    const pessoa = {
      nome: "Caio", 
      idade: 23, 
      backender: false
    }
    
    console.log(minhaFuncao(pessoa, "backender"))
    console.log(minhaFuncao(pessoa, "altura"))
    
    
    /*a) O que vai ser impresso no console?false e undefined
    
    b) Explique o valor impresso no console. Você sabe por que isso aconteceu? deu falso por conta que o valor é false e deu undefined por conta que nao tem altura.*/