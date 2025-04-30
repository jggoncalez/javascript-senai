let userInf = []

function cadastroUsuario(){
    let userName = prompt("Digite o nome de usuário desejado:")
    let userPass = prompt("Digite a senha desejada:")
    userInf.push({userName, userPass})
}

function loginUsuario(){
    let verifName = prompt("Nome de usuário:")
    let verifPass = prompt("Senha: ")

    userInf.forEach(function(userInf) {
        if (verifName == userInf.userName && verifPass == userInf.userPass){
            alert("Login feito com sucesso!")
        } else{
            alert("Login incorreto")
        }
    });
}

cadastroUsuario();
loginUsuario();