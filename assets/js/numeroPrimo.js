function esPrimo(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function verificarPrimo() {
    const input = document.getElementById("numeroPrimo").value;
    const numero = parseInt(input);

    if (isNaN(numero)) {
        document.getElementById("resultadoPrimo").innerText = "Por favor, introduce un número válido.";
        return;
    }

    const resultadoPrimo = esPrimo(numero);
    if (resultadoPrimo) {
        document.getElementById("resultadoPrimo").innerText = `${numero} es un número primo.`;
    } else {
        document.getElementById("resultadoPrimo").innerText = `${numero} no es un número primo.`;
    }
}