// --- Desafios ---

// Algoritmo para checar se um número é par
function checkPar(numero) {
    return numero % 2 == 0;
}

console.log(checkPar(10)); // true
console.log(checkPar(11)); // false

// Algoritmo para vacinação para Covid-19 acima de 60 anos
function vacinacao(idade) {
    return idade >= 60;
}

console.log(vacinacao(45)); // false
console.log(vacinacao(80)); // true

// Algoritmo para checar se um veículo é elétrico ou flex
function veiculo(tipo) {
    return tipo == 'elétrico' || tipo == 'flex';
}

console.log(veiculo('elétrico')); // true
console.log(veiculo('gasolina')); // false