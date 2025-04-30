function sumCalc(itens){
    let soma = 0
    for(let i = 0; i < itens.length; i++){
        soma += itens[i]
    }
    return soma
}

let itens = [];
let quantidade = parseInt(prompt("Quantos produtos você deseja inserir?"))

for (let i = 0; i < quantidade; i++){
    let num = parseFloat(prompt(`Digite o valor do produto ${i + 1}: `))
    itens.push(num);
}

let sum = sumCalc(itens)
alert(`O valor total é ${sum}`);