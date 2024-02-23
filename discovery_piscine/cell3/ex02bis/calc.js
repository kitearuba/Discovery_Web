function calcularResultado(event) {
    event.preventDefault();

    const miembroIzquierdo = parseFloat(document.getElementById('miembroIzquierdo').value);
    const operador = document.getElementById('operador').value;
    const miembroDerecho = parseFloat(document.getElementById('miembroDerecho').value);

    if (isNaN(miembroIzquierdo) || isNaN(miembroDerecho) || miembroIzquierdo < 0 || miembroDerecho < 0) {
        alert("Error :(");
        console.log("Error :(");
        return;
    }

    let resultado;

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
            if (miembroDerecho === 0) {
                alert("It's over 9000!");
                console.log("It's over 9000!");
                return;
            }
            resultado = miembroIzquierdo / miembroDerecho;
            break;
        case '%':
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

    alert(`El resultado es: ${resultado}`);
    console.log(`El resultado es: ${resultado}`);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calcForm').addEventListener('submit', calcularResultado);
    
    setInterval(function() {
        alert("Please, use me...");
    }, 30000);
});


$(document).ready(function() {
    $('#calcForm').submit(function(event) {
        event.preventDefault();

        const miembroIzquierdo = parseFloat($('#miembroIzquierdo').val());
        const operador = $('#operador').val();
        const miembroDerecho = parseFloat($('#miembroDerecho').val());

        if (isNaN(miembroIzquierdo) || isNaN(miembroDerecho) || miembroIzquierdo < 0 || miembroDerecho < 0) {
            alert("Error :(");
            console.log("Error :(");
            return;
        }

        let resultado;

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
                if (miembroDerecho === 0) {
                    alert("It's over 9000!");
                    console.log("It's over 9000!");
                    return;
                }
                resultado = miembroIzquierdo / miembroDerecho;
                break;
            case '%':
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

        alert(`El resultado es: ${resultado}`);
        console.log(`El resultado es: ${resultado}`);
    });

    setInterval(function() {
        alert("Please, use me...");
    }, 30000);
});