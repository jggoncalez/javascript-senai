let nomeProd = window.prompt('Nome do produto: ')
let valorProd = Number(window.prompt('Valor (R$) do produto: '))
let clienteDinheiro = Number(window.prompt('Valor dado pelo cliente: '))
let troco = clienteDinheiro - valorProd

res = document.getElementById('total')
res.innerHTML = `Produto: <strong>${nomeProd}`
res.innerHTML += `<p>Valor total da compra: <strong>R$ ${valorProd.toFixed(2)}</p>`
res.innerHTML += `<p>Valor dado pelo cliente: <strong>R$ ${clienteDinheiro.toFixed(2)}</p>`
res.innerHTML += `<p>Troco: <strong>R$ ${troco.toFixed(2)}</p>
`