document.getElementById('calcular').addEventListener('click', function() {
    const valor = parseFloat(document.getElementById('valor').value);
    const porcentagem = parseFloat(document.getElementById('porcentagem').value);

    if (isNaN(valor) || isNaN(porcentagem)) {
        document.getElementById('resultado').textContent = "Por favor, insira valores válidos.";
        return;
    }

    const resultado = (valor * porcentagem) / 100;
    document.getElementById('resultado').textContent = `Resultado: ${resultado.toFixed(2)}`;
});
