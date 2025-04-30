// Escreva um programa que calcule os valores de entrada e de opções para tipos de ingressos. Ao final representar os valores e tipo de ingressos.

let valores = [15, 30, 25, 50];
let entradas = [];
let total = []

function pessoasQtt(){
    let qtt = prompt("Quantos ingressos deseja?");
    for (let i = 0; i < qtt; i++) {
        let selecEntrada = prompt(`Qual tipo de ingresso você deseja para a pessoa ${i + 1}\n
            1. Meia entrada comum
            2. Entrada comum
            3. Meia entrada VIP
            4. Entrada VIP`);
        entradas.push(parseInt(selecEntrada) - 1);
    }
}
function calcEntradas() {
    let sum = 0;
    for (let j = 0; j < entradas.length; j++) {
        sum += valores[entradas[j]];
    }
    return sum;
}

pessoasQtt();
alert(`Total: ${calcEntradas()}`)
