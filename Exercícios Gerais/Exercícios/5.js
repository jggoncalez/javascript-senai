// Exercício 5: Operadores Numéricos

let a = 10;
let b = 20;
let c = 15;

console.log(a > b); // false
console.log(b < c); // false
console.log(a <= c); // true
console.log(b >= c); // true

//Combinações
console.log((a > b) && (b < c)); // false
console.log((a <= b) || (b > c)); // true
console.log((a <= c) || (b < 0)); // true