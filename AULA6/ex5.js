function start(){

    let preco = Number(window.prompt('Qual é o preço?'))
    let porc = Number(window.prompt('Quanto de desconto você quer dar?'))

    let valor = (preco * porc) / 100
    let total = preco - valor
    let res = document.getElementById('result')

    
    res.innerHTML = `<p>O produto custa <strong>R$${preco.toFixed(2)}</strong>.</p>`
    res.innerHTML += `<p>Um desconto de <strong>${porc}%</strong> sobre ele será de <strong>R$${valor.toFixed(2)}</strong>.</p>`
    res.innerHTML += `<p>O valor final a ser pago será de <mark><strong>R$${total.toFixed(2)}</strong></mark>.</p>`
}