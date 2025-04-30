// Verificação de idade
let idade = 30
if (idade > 60){
    console.log("Idoso");
} else if (idade > 18) {
    console.log("Adulto");
} else if (idade> 12){
    console.log("Adolescente");
} else{
    console.log("Criança");
}

// Escreva um programa que verifique a nota de um aluno e imprima uma mensagem personalizada com base na nota.
let nota = 3
if (nota > 10){
    console.log("Nota inválida");
} else if (nota >= 8) {
    console.log("Excelente");
} else if (nota >= 6){
    console.log("Ok!");
} else if (nota == 5){
    console.log("Na risca");
} else{
    console.log("Que pena!");
}

// Escreva um programa que verifique o dia da semana e imprima uma mensagem apropriada. (Deixar o mais curto possível)

let dia = 'domingo';

if (dia === 'domingo' || dia === 'sabado') {
    console.log('Hoje é ' + dia + '! Vou a praia');}

    else {
    console.log('Hoje é ' + dia + "! Hora de trabalhar!");
    }


// Verificação de Horário do Dia

hora = 11.30

if (hora > 24.00){
    console.log("Horário inválido!");
}
else if(hora >= 18.00){
    console.log("Noite");
}
else if(hora >= 12.00){
    console.log("Dia");
}
else if(hora >= 5.00){
    console.log("Manhã");
}
else{
    console.log("Madrugada");
}

//Escreva um programa que verifique se uma pessoa está abaixo, dentro ou acima do peso ideal com base no IMC (Índice de Massa Corporal).
peso = 72
altura = 1.72

imc = (peso/(altura*altura))

if (imc >= 40){
    console.log("Obesidade grau III");
} else if (imc >= 35 ){
    console.log("Obesidade grau II");
} else if (imc >= 30){
    console.log("Obesidade grau I");
} else if (imc >= 25) {
    console.log("Sobrepeso");
} else if (imc >= 18.5){
    console.log("Normal");
} else {
    console.log("Magreza")
}

// Escreva um programa que verifique se um número é primo.
numTest = 13

if (numTest % 2 == 0 || numTest % 3 == 0 || numTest % 5 == 0){
    console.log(`O número ${numTest} não é um número primo!`)
} else{
    console.log(`O número ${numTest} é um número primo!`)
}


// Escreva um programa que verifique se um ano é bissexto.

yearBix = 2024

if (yearBix % 4 == 0){
    console.log(`O ano ${yearBix} é bissexto!`)
} else {
    console.log(`O ano ${yearBix} não é bissexto!`)
}

// Escreva um programa que verifique a nota de um aluno e imprima uma mensagem personalizada com base na nota.

let nota1 = 7
if (nota1 > 10){
    console.log("Nota inválida");
} else if (nota1 >= 5){
    console.log(`Sua nota é ${nota1}. Você foi aprovado! `);
} else{
    console.log(`Sua nota é ${nota1}. Você foi reprovado! `);
}


// Escreva um programa que verifique a temperatura e imprima uma mensagem apropriada.

temp = 15

if (temp >= 39){
    console.log ("Dia muito quente!")
} else if (temp >= 30){
    console.log ("Dia quente!")
} else if (temp >= 20){
    console.log ("Dia morno!")
} else if (temp >= 10){
    console.log ("Dia fresco!")
} else{
    console.log("Dia frio")
}

// Escreva um programa que verifique o desempenho de vendas de um vendedor e imprima uma mensagem apropriada.

prodCost = 0.75
prodPrice = 2.50
sellQtt = 1500

revenue = ((prodPrice - prodCost)* sellQtt)

if (revenue >= 1000){
    console.log("Ótimo desempenho!")
} else if (revenue >= 500){
    console.log("Bom desempenho!")
} else if (revenue >= 0){
    console.log("Desempenho OK!")
} else if (revenue < 0){
    console.log("Péssimo desempenho!")
}