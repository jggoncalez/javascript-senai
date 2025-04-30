let user = []

function userCadastro(){
    let nome = prompt("Digite o seu nome completo");
    let idade = parseInt(prompt("Digite a sua idade"))
    let habilitacao = parseInt(prompt("Possui habilitação para dirigir?\n Digite 1 para sim, e 0 para não"))
    user.push({nome, idade, habilitacao});
}

function idadeVerificar(){
    user.forEach(function(user) {
        if (user.idade >= 18 && user.habilitacao == 1){
            alert(`${user.nome} é um adulto e pode dirigir`)}
        else if (user.idade >= 18 && user.habilitacao == 0){
            alert(`${user.nome} é um adulto e não pode dirigir`)
        } else{
            alert(`${user.nome} não é um adulto e não pode dirigir`)
        }
    });
}

userCadastro();
idadeVerificar();  