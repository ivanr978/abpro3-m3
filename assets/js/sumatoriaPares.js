function sumatoriaPares(n) {
    if (n <= 10 || n >= 1000) {
        throw new Error("El número debe ser un entero mayor que 10 y menor que 1000.");
    }

    let suma = 0;
    for (let i = 2; i <= n; i += 2) {
        suma += i;
    }
    return suma;
}

function ejecutarSumatoriaPares() {
    const input = document.getElementById("numeroPares").value;
    const numero = parseInt(input);
    try {
        const resultado = sumatoriaPares(numero);
        document.getElementById("resultadoPares").innerText = `Sumatoria de pares: ${resultado}`;
    } catch (error) {
        document.getElementById("resultadoPares").innerText = error.message;
    }
}