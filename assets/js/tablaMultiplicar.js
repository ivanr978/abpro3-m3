function tablaMultiplicar(n) {
    let resultado = "";
    for (let i = 1; i <= 12; i++) {
        resultado += `${n} x ${i} = ${n * i}\n`;
    }
    return resultado;
}

function ejecutarTablaMultiplicar() {
    const input = document.getElementById("numeroTabla").value;
    const numero = parseInt(input);
    const resultado = tablaMultiplicar(numero);
    document.getElementById("resultadoTabla").innerText = resultado;
}