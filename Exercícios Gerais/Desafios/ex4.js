let userInf = []
let compras = []

function cadastroUsuario(){
    let userName = prompt("Digite o nome de usuário desejado:")
    let userVIP = parseInt(prompt("O usuário é cliente VIP?\n Digite 1 para sim, e 0 para não"))
    userInf.push({userName, userVIP})
}

function comprarItens(){
    let qttItens = prompt("Quantos itens deseja adicionar à compra?")
    for (let i = 0; i < qttItens; i++){
        let item = prompt(`Insira o item ${i+1}:`)
        compras.push(item)
    }
}

function desconto(){
    if (userInf.userVIP == 1){
        if (compras.length >= 15){
            alert(`O usuário ${userInf[0].userName} conseguiu 50% de desconto!`)
        } else if (compras.length >= 9){
            alert(`O usuário ${userInf[0].userName} conseguiu 30% de desconto!`)
        } else if (compras.length >= 5){
            alert(`O usuário ${userInf[0].userName} conseguiu 15% de desconto!`)
        } else{
            alert(`O usuário ${userInf[0].userName} conseguiu 10% de desconto!`)
        }
    }
    else{
        if (compras.length >= 15){
            alert(`O usuário ${userInf[0].userName} conseguiu 30% de desconto!`)
        } else if (compras.length >= 9){
            alert(`O usuário ${userInf[0].userName} conseguiu 15% de desconto!`)
        } else if (compras.length >= 5){
            alert(`O usuário ${userInf[0].userName} conseguiu 5% de desconto!`)
        } else{
            alert(`O usuário ${userInf[0].userName} não tem a quantidade de itens suficiente para conseguir desconto.`)
        }
    }
}

cadastroUsuario();
comprarItens();
desconto();