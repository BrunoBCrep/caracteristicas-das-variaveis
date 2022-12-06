// Resposta para questão final: 

// Primeiro exemplo
testeDeclaration()
function testeDeclaration() {
    console.log('Testando function Declaration ! ')
}

// Segundo exemplo
//testeExpression()  // erro, pois ocorre hoisting 
var testeExpression = function() {
    console.log('Testando function Expression ! ')  
}
testeExpression() 
