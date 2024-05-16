function somar() {
    // Pegando os valores dos campos de entrada
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);

    // Verificando se os valores são números
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    // Calculando a soma
    var resultado = num1 + num2;

    // Exibindo o resultado
    document.getElementById("resultado").innerText = "O resultado da soma é: " + resultado;
}
