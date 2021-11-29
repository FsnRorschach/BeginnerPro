let arr = [8, 12, 90, 83, 15];
let soma = 0;
let mult = 0;
let result = 0;
// iterando o array de numeros
for (let i = 0; i < arr.length; i++) {
    console.log("numero: " + arr[i] + ", posição no array: " + i);
    // somando os valores iterados e guardando na variavel soma
    soma = soma + arr[i];
    console.log("Resultado da soma: " + soma);
    // multiplicando o valor da soma por 15
    result = soma * 15;
    console.log("Resultado da multiplicação da variavel soma por 15: " + result);
}

soma = 0;
mult = 0;
result = 0;

// iterando o array de numeros
for (let i = 0; i < arr.length; i++) {
    console.log("numero: " + arr[i] + ", posição no array: " + i);
    // multiplicando os valores iterados e guardando na variavel mult
    mult = 15 * arr[i];
    console.log("Resultado da multiplicação: " + mult);
    // somando o valor da variavel mult 
    result = result + mult;
    console.log("Resultado da multiplicação da soma por 15: " + result);
}