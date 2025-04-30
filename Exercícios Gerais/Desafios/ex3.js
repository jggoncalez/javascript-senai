let user = []

function cadastroUsuario(){
    let name = prompt("Digite o seu nome:");
    let idade = prompt("Digite a sua idade");
    let origemPais = prompt("Digite o país que você mora atualmente").toLowerCase()
    user.push({name, idade, origemPais})
}

function verifEleitor(){
    user.forEach(function(user) {
        if (user.origemPais == "brasil" && user.idade >= 16){
            alert(`O senhor(a) ${user.name} pode votar no ${user.origemPais}`)
        } else{
            alert(`O senhor(a) ${user.name} não pode votar no ${user.origemPais}`)
        }
    });
}

cadastroUsuario();
verifEleitor();