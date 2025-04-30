//Condicionais if e else

let num = 1;
if (num === 1) {
    console.log('número é igual a 1');
} else {
    console.log('número é diferente de 1');
}

//idade
let idade = 18;
if (idade >= 18) {
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}

// vacina

let age = 65;
if (age >= 65) {
    console.log('Pode Vacinar');
} else {
    console.log('Não pode vacinar');
}


// dia 1
let dia = 'terça-feira';

if (dia === 'domingo' || dia === 'sabado') {
    console.log('Vou a praia');}

    else {
    console.log('Hoje é ' + dia + "! Hora de trabalhar!");
    
}

// dia 2

var diat = 'terça'

if (diat === 'segunda'){
    console.log('Segunda-feira: PowerBI')}
else if (diat === 'terça'){
    console.log('Terça-feira: Levantamento de requisitos')}
else if (diat === 'quarta'){
    console.log('Quarta-feira: Sistemas Operacionais')}
else if (diat === 'quinta'){
    console.log('Quinta-feira: Lógica de programação')}
else if (diat === 'sexta'){
    console.log('Sexta-feira: Arquitetura de redes')
}
else {console.log('Fim de semana!')}


// hora do dia
let hora = 13;
if (hora > 24){
    console.warn('Coloque um número abaixo de 24!')
} else if (hora < 12) {
    console.log('Bom dia');
} else if (hora < 18) {
    console.log('Boa tarde');
} else {
    console.log('Boa noite');
}

// temperatura
let temp = 30;
if (temp < 20) {
    console.log('Frio');
} else {
    console.log('Calor');
}