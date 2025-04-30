let ab = true;
let bc = false;
let br = "-------------------";

//Combinação de operadores lógicos
let nonresultado = !ab
console.log(nonresultado); // false

let combinacaoResultado = (ab && !bc) || (!ab && bc);
console.log(combinacaoResultado); // true
console.log(br);

// Operadores lógicos com valores numéricos
let x = 10;
let y = 5;
let z = 0;

// Operador E (&&) com valores numéricos
let eResultado = (x > y) && (y > z);
let fResultado = (z < y) && (x > z);

console.log("Resultado de x > y e y > z: " + eResultado); // true
console.log("Resultado de z < y e x > z: " + fResultado); // true

// Operador OU (||) com valores numéricos
let ouResultado = (x < y) || (y > z);
let ouResultado2 = (x < y) || (y < z);

console.log("Resultado de x < y ou y > z: " + ouResultado); // true
console.log("Resultado de x < y ou y < z: " + ouResultado2); // false
console.log(br);

// Operador NÃO (!) com valores numéricos
let nResultado = !(x < y);
let nResultado2 = !(z < y);

console.log("Resultado de !(x < y): " + nResultado); // false
console.log("Resultado de !(z < y): " + nResultado2); // true
console.log(br);

// Combinação de operadores lógicos com valores numéricos
let cResultado = ((x > y) && (y > z)) || ((x < y) && (z > y));

console.log("Resultado de ((x > y) && (y > z)) || ((x < y) && (z > y)): " + cResultado); // true
