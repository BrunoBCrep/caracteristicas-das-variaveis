// Exemplo c/ let 

var nome = 'Bruno B Crep'

if (1 + 1 == 2) {
    var nome = 'Brook'
}
console.log(nome) 

var nome1 = 'Bruno B Crep' 

if (1 + 1 == 2) {     // let possui block scope 
    let nome1 = 'Brook' 
}
console.log(nome1) 