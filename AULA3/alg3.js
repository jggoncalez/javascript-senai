// --- Exercícios de fixação ---
// Checar idade com habilitação para dirigir
function dirigir(idade, habilitacao) {
    return idade >= 18 && habilitacao;
}

console.log(dirigir(60, false)) // false
console.log(dirigir(17, true)); // false
console.log(dirigir(30, true)); // true
console.log(dirigir(19, false)); // false
console.log(dirigir(25, true)); // false

// --- Exercícios de fixação ---

let a = true;
let b = true;

console.log(a || b); // true
console.log(b || false); // true

// --- Exercícios de fixação ---
function fimdesemana(dia) {
    return dia === 'sabado' || dia === 'domingo';

}
console.log(fimdesemana('sabado')); // true
console.log(fimdesemana('segunda')); // false
console.log(fimdesemana('domingo')); // true 

// --- Exercícios de fixação ---
function naoAdulto(idade) {
    return !(idade >= 18);
}

console.log(naoAdulto(20)); // false
console.log(naoAdulto(16)); // true
