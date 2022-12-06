// Redeclaração de let

let num1 = 5
//let num1 = 6        // retorna erro, pois a variavel ja foi declarada
console.log(num1)     // e no caso do let, ele nao pode ser redeclarado 

let num2 = 4          // alterar seu valor é possivel 
num2 = 7
console.log(num2)

//console.log(nome) //  recebe erro em caso de hoisting 

let nome = 'bruno'  // var nao retornaria erro, mas let retorna 