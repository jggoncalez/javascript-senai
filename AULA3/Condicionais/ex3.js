// condicionais com if, else e else if
let nota = 10;

if (nota >= 80) {
    console.log('Parabéns, você foi aprovado!');

} else if (nota < 80 && nota >= 60) {
    console.log('Você está na nossa lista de espera!');
} else {
    console.warn('Você foi reprovado(a)');
}


// 2

let idade = 18

if (idade >= 60) {
    console.log('Você pode ser vacinado!');
}
else if (idade >=15) {
    console.log('Você está na lista de espera!');
}
else {
    console.log('Você não pode ser vacinado');
}

// 3

let nota1 = 30

if (nota1 >= 90){
    console.log('Excelente!');
}

else if (nota1 >= 70)
    console.log('Muito bom!');

else if (nota1 >= 60){
    console.log('Na risca!')
}

else if (nota1 >= 50){
    console.log('Quase!')
}

else{
    console.log('Quem sabe na próxima?')
}

