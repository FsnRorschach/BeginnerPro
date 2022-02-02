3 - Transforme a função a seguir em arrow function (inclusive a função do map)

function multiplicaNumeros(x, ...numeros) {
    const numerosMultiplicados = numeros.map(function (numero) {
        return numero * x;
    });

    return numerosMultiplicados;
}

