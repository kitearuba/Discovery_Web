function calcularResultado(event) {
    event.preventDefault(); // Prevenir el envío normal del formulario

    const miembroIzquierdo = parseFloat(document.getElementById('miembroIzquierdo').value);
    const operador = document.getElementById('operador').value;
    const miembroDerecho = parseFloat(document.getElementById('miembroDerecho').value);

    if (isNaN(miembroIzquierdo) || isNaN(miembroDerecho) || miembroIzquierdo < 0 || miembroDerecho < 0) {
        alert("Error :(");
        console.log("Error :(");
        return;
    }

    // Inicializa la variable resultado
    let resultado;

    // Usa un switch para manejar la operación basada en el operador seleccionado
    switch (operador) {
        case '+':
            resultado = miembroIzquierdo + miembroDerecho;
            break;
        case '-':
            resultado = miembroIzquierdo - miembroDerecho;
            break;
        case '*':
            resultado = miembroIzquierdo * miembroDerecho;
            break;
        case '/':
            // Manejo específico para la división por cero
            if (miembroDerecho === 0) {
                alert("It's over 9000!");
                console.log("It's over 9000!");
                return;
            }
            resultado = miembroIzquierdo / miembroDerecho;
            break;
        case '%':
            // Manejo específico para el módulo por cero
            if (miembroDerecho === 0) {
                alert("It's over 9000!");
                console.log("It's over 9000!");
                return;
            }
            resultado = miembroIzquierdo % miembroDerecho;
            break;
        default:
            alert("Operación no válida");
            console.log("Operación no válida");
            return;
    }

    // Muestra el resultado mediante una alerta y lo registra en la consola
    alert(`El resultado es: ${resultado}`);
    console.log(`El resultado es: ${resultado}`);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculadoraForm').addEventListener('submit', calcularResultado);

    // Configura un mensaje recurrente cada 30 segundos
    setInterval(function() {
        alert("Please, use me...");
    }, 30000);
});
