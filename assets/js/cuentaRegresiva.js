function cuentaRegresiva(n) {
    if (n < 1 || n >= 100) {
        throw new Error("El número debe ser un entero mayor que 0 y menor que 100.");
    }

    let resultado = "";
    for (let i = n; i > 0; i--) {
        resultado += i + (i > 1 ? ", " : "");
    }
    return resultado;
}

function ejecutarCuentaRegresiva() {
    const input = document.getElementById("numeroRegresiva").value;
    const numero = parseInt(input);
    try {
        const resultado = cuentaRegresiva(numero);
        document.getElementById("resultadoRegresiva").innerText = resultado;
    } catch (error) {
        document.getElementById("resultadoRegresiva").innerText = error.message;
    }
}