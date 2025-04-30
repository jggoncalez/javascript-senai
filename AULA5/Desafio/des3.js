// Calcular média de notas com base em duas notas, sendo a primeira 6 e a segunda 10, e mais 4 para trabalhos

notas = [6, 10, 4]
let sum = 0
for(let i = 0; i < notas.length; i++){
    sum += notas[i]
}

calcMedia = sum / 2

alert(` O valor é ${calcMedia}!!`)

