let pesoPeca = 100

// pesoPeca - Camel Case 
// peso_peca - Snake Case 
// PesoPeca - Pascal Case

if(pesoPeca > 100) {

console.log("Peso maior que 100g, logo, podemos cadastrar a peça!!!")
} else {
    console.log("Peso insuficiente, não é possível cadastrar! ")
}


let numeroPecas = 10

if(numeroPecas < 10) {

    console.log("Ainda há espaço na caixa, podemos cadastrar a peça ")
} else {
    console.log("Não há espaço disponível na caixa ")
}


let nomePecas = "Disco de Freio"

console.log ("O comprimento do nome da peça é: " , nomePecas.length)

if(nomePecas.length < 3){
console.log("Nome da peça muito curto, não é possível cadastrar")
} else {
    console.log("Nome da peça adequado, podemos cadastrar ")
}