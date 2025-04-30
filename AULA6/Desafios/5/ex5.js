let dolPadrao = 5.74


function realConv(){
    let selReal = Number(window.prompt('Valor em Reais (R$)'))
    document.getElementById('real').innerHTML = `Real: R$ ${selReal.toFixed(2)}`
    document.getElementById('dolar').innerHTML = `Dólar: US$ ${(selReal / dolPadrao).toFixed(2)}`
}

function dolConv(){
    let selDol = Number(window.prompt('Valor em Dólares (US$)'))
    document.getElementById('real').innerHTML = `Real: R$ ${(selDol * dolPadrao).toFixed(2)}`
    document.getElementById('dolar').innerHTML = `Dólar: US$ ${selDol.toFixed(2)}`
}