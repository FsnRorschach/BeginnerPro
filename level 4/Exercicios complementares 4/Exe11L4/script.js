// array que será ordenado em ordem crescente
const numeros = [10, 1, 3, -6, 0.18];

// ordenar o array de numeros, function que compara valor a com b
numeros.sort(function ordenaNum(a, b) {
    if (a > b) return 1; // retorna 1 == a maior b
    if (a < b) return -1; // retorna -1 == a menor b
    return 0; // retorna numeros são iguais
});

console.log(numeros);