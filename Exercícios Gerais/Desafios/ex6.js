let movNome = ["Cadeira", "Mesa", "Mesa de cabeceira", "Banco"];
let movMaterial = ["Madeira", "Metal", "Madeira", "Plástico"];
let movCor = ["Marrom", "Preto", "Branco", "Vermelho"];
let movPreco = [150, 300, 200, 100];

function question(){
    let yn = prompt("Deseja adicionar algum móvel? (s/n)").toLowerCase()
    if (yn == 's'){addMov()}
    else{movList()}
}

function addMov(){
    let nome = prompt("Nome do móvel:");
    let material = prompt("Material do móvel:");
    let cor = prompt("Cor do móvel:");
    let preco = parseFloat(prompt("Preço do móvel:"));

    movNome.push(nome);
    movMaterial.push(material);
    movCor.push(cor);
    movPreco.push(preco);

    alert("Móvel adicionado com sucesso!");
    movList()
}

function movList() {
    let choice = prompt("Qual móvel você deseja?\n" +
        "1. Cadeira de Madeira\n" +
        "2. Mesa de Metal\n" +
        "3. Mesa de cabeceira de Madeira\n" +
        "4. Banco de Plástico,\n" +
        `5. ${movNome[4]} de ${movMaterial[4]}`)
    movProps(choice);
}

function movProps(choice) {
    let selectID = choice;
    alert(`Propriedades do móvel selecionado:
        Nome: ${movNome[selectID - 1]}
        Material: ${movMaterial[selectID - 1]}
        Cor: ${movCor[selectID - 1]}
        Preço: R$${movPreco[selectID - 1]}`)
}

question();