// Redeclaração de valores p/ variavel 
var nome = 'bbc'

function retornarNome(){ // o ato de declarar uma função não a executa 
    nome = 'zika'            // reatribuição no valor da variavel 
    return nome
}

retornarNome()
console.log(nome) 
console.log(retornarNome())
