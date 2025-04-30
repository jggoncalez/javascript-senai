res = document.getElementById('resposta')
planArr = ['Básico', 'Premium']
priceArr = [15, 30]

function compra(){
    let filmeComp = window.prompt('Qual filme deseja comprar?')    
    
    let price = Math.random() * (50 - 10) + 10
    res.innerHTML = `Filme: ${filmeComp}`
    res.innerHTML += `<p>Total: ${price.toFixed(2)}</p>` 
}

function aluguel(){
    let filmeAlug = window.prompt('Qual filme deseja alugar?')
    
    let price = Math.random() * (25 - 10) + 10
    res.innerHTML = `Filme: ${filmeAlug}`
    res.innerHTML += `<p>Total: ${price.toFixed(2)}</p>`    
}

function plano(){
    let filmePlan = Number(window.prompt("Escolha o seu plano (digite o número):\n 1. Básico: R$ 15,00 \n 2. Premium: R$ 30,00"))
    
    let price = priceArr[filmePlan - 1]
    res.innerHTML = `Plano: ${planArr[filmePlan - 1]}`
    res.innerHTML += `<p>Total: ${price.toFixed(2)}</p>`    
}