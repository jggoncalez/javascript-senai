//Operadores lógicos com variáveis booleanas
let a = true;
let b = false;
let c = true;
let d = false;
let br = "-------------------";

console.log("Utilizando && (E)");
console.log(a && b); // false
console.log(a && true); // true
console.log(d && b); // false
console.log(c && a); // true
console.log(a && c); // true
console.log(br);

// || (OU)
let e = true;
let f = false;
let g = true;
let h = false;

console.log("Utilizando || (OU)");
console.log(e || f); // true
console.log(e || true); // true
console.log(f || h); // false
console.log(g || e); // true
console.log(g || h); // true
console.log(br);

// ! (NÃO)

let i = true;
let j = false;
let k = true;
let l = false;

console.log("Utilizando ! (NÃO)");
console.log(!i); // false
console.log(!j); // true
console.log(!j && !l); // true
console.log(!k || j); // false
console.log(!l || i); // true
console.log(br);

//...
let ab = true;
let bc = false;

// && (E)
let eResultado = ab && bc;
console.log(eResultado); // false

// || (OU)
let ouResultado = ab || bc;
console.log(ouResultado); // true
console.log(br);

