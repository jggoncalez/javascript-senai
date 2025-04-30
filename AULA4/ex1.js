// Exercícios
// 1. Imprimir 11 vezes "Olá, mundo!".
for (let i = 0; i < 11; i++) {
    console.log("Olá, mundo!");
}


// 2. Imprimir resultado de uma tabuada.
num = 5
for (let i = 0; i <= 10; i++) {
    console.log(num*i);
}



// 3. Imprimir a soma de números impares de 1 a 100.
soma = 0
for (let n = 1; n < 100; n += 2) {
soma += n;}

console.log(soma);



// 4. Imprimir o resultado em sequência de 10 a 1, e dizer "Feliz ano novo!".

for(let a = 10; a >=1; a--) {
    console.log(a)
    if (a == 1){
        console.log("Feliz ano novo!")
        break;
    }
}