// Desafio 1 
// Algoritmo que separa pares e ímpares

let num = 3
if (num %2 == 0){
    console.log('O número ' + num + ' é par!')
} else {
    console.log('O número ' + num +  ' é ímpar!')
}


// Desafio 2
// Criar um algoritmo para calcular valores com as expressões somar, subtrair, multiplicar e dividir

let num1 = 51;
let num2 = 33;

if (num1%2 == 0){
    let sum = num1 + num2
    console.log(`\n Resultado da soma: ${sum}`)
}
else if (num2%2 == 0){
    let mult = num1 * num2
    console.log(`\n Resultado da multiplicação: ${mult}`)
}
else if (num1 + num2 >= 50){
    let min = num2 - num1
    console.log(`\n Resultado da subtração: ${min}`)
}
else {
    let div = num1 / num2
    console.log(`\n Resultado da divisão: ${div}`)
}