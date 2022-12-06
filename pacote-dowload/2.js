// Exemplo de hoisting 
//console.log(num)  // Erro : num is not defined 

var num 
console.log(num) // Não ha erro, pois num foi declarado mas não ha nenhum valor p/ ele 

console.log(n1)
var n1 = 'bbc' // var undefined, isso ocorre devido ao hoisting 

var n2
console.log(n2)
n2 = 126
console.log(n2) 


// Por isso, sempre declaramos variaveis no topo do codigo
// Hoisting nao afeta o let e o const 