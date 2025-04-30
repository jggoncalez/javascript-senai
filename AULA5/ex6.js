temperatura = parseFloat(prompt("Digite a temperatura: "));

if (temperatura >= 30) {
    alert("Sua temperatura é " + temperatura + " graus. Está muito quente!!!");
    // prompt(temperatura);
} else if (temperatura >= 20) {
    alert("Sua temperatura é " + temperatura + " graus. Está agradável.")
} else if (temperatura >= 10) {
    alert("Sua temperatura é " + temperatura + " graus. Está frio!")
} else{
    alert("Sua temperatura é " + temperatura + " graus. Está muito frio.")
}