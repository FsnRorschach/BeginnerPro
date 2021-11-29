let arr = ["Otávio", "Gabriel", "Claudemir", "Lucas"];
let array1 = [];
let soma = 0;
let result;
console.log("quantidade de posições o array: " + arr.length);
// for para iterar o array
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    console.log(arr[i].length);
    // guarda no array o tamanho de cada String
    array1[i] = arr[i].length;
    console.log(array1);
    // guarda na variavel a soma da quantidade de caracteres de cada string
    soma = soma + array1[i];
    console.log(soma);
}
// guarda na variavel result a conta de tirar média
result = soma / array1.length;

console.log("Valor da média de carateres das Strings: " + result);