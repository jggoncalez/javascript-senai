let userInf = []

function registerPlate(){
    let carPlate = prompt("Digite o número da placa para cadastro:")
    userInf.push({carPlate})
}

function searchPlate(){
    let verifPlate = prompt("Busque o número da placa:")

    userInf.forEach(function(userInf) {
        if (verifPlate == userInf.carPlate){
            alert("Placa encontrada no sistema!")
        } else{
            alert("Placa não encontrada")
        }
    });
}

registerPlate();
searchPlate();