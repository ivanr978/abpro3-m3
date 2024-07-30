function sumatoria(n) {
  if (n < 1 || n >= 100) {
      throw new Error("El número debe ser un entero mayor que 0 y menor que 100.");
  }

  let suma = 0;
  for (let i = 1; i <= n; i++) {
      suma += i;
  }
  return suma;
}

function calcularSumatoria() {
  const input = document.getElementById("numero").value;
  const numero = parseInt(input);

  try {
      const resultado = sumatoria(numero);
      document.getElementById("resultado").innerText = `La sumatoria de 1 a ${numero} es: ${resultado}`;
  } catch (error) {
      document.getElementById("resultado").innerText = error.message;
  }
}