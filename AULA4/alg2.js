// Imprimir números pares de 1 a 20

for (let i = 12; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//--------------------------

// const readlineSync = require('readline-sync');
// let numero = readlineSync.question('Digite um número: ');
numero = 5

numero = Number(numero);

let fatorial = 1;
for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

console.log(`O fatorial de ${numero} é ${fatorial}`);

// Iterar sobre um array

let frutas = ['banana', 'maçã', 'laranja'];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Iterar sobre outro tema

let gameName = ['Osu!', 'Muse Dash', 'Groove Coaster', 'Beat Mania', 'Dance Dance Revolution'];
for (let g = 0; g < gameName.length; g++) {
    console.log(gameName[g]);
}

// Cancular a soma de números:

let soma = 0;
for (let i = 0; i <= 100; i++) {
    soma += i;
}
console.log(soma);