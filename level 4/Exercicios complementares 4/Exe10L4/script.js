// array d numeros
const numeros = [1, 50, -288, 0.18];
console.log(numeros);
// novo array
let newArray = [];

// for para iterar o array numeros
for (let i = 0; i < numeros.length; i++) {
    console.log(i);
    console.log(numeros[i]);

    newArray[i] = numeros[i] - 50;
}

// novo array subitraindo 50 de cada posição
console.log(newArray);