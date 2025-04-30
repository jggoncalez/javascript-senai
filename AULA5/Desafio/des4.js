// Lava rápido do João - 3 serviços
// 1 - Lavagem simples - R$ 20,00
// 2 - Lavagem completa - R$ 30,00
// 3 - Enceramento - R$ 50,00
// Apresentar o valor total da compra ou serviço escolhido, valor final, nome do cliente e placa do veículo

let price = [20, 30, 50]
let infUser = []
let nameUser = prompt("Escreva o seu nome: ")
let carPlate = prompt("Digite o número da placa: ")

let i = parseFloat(prompt("Digite o serviço desejado: \n 1 - Lavagem simples - R$ 20,00 \n 2 - Lavagem completa - R$ 30,00 \n 3 - Enceramento - R$ 50,00"))

infUser.push(i - 1);


// Procurar preço

j = infUser
totalPrice = price[j]
alert(`Olá ${nameUser}! \n
    Placa do carro ${carPlate} \n 
    Preço total: R$ ${totalPrice}`)