let selecNum = Number(window.prompt('Qual número deseja?'))

function find(){
    document.getElementById('antecessor').innerHTML =`Antecessor: ${selecNum - 1}`
    document.getElementById('sucessor').innerHTML =`Sucessor: ${selecNum + 1}`
}