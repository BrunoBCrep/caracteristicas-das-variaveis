// Exemplo de scope chain 
var nome = 'bbc'

function retornarNome(){ // o ato de declarar uma função não a executa 
    var nome = 'anao'    // var fica limitado a função onde foi declarada 
    return nome
}

retornarNome() 
console.log(nome) 
console.log(retornarNome()) 