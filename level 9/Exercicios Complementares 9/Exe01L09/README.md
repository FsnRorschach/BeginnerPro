Exercícios Complementares

1 - O que são Rest Parameters? Dê um exemplo simples.

Rest parameters são parametros passados em uma função, podendo ser infinitos, quando criado se tornam um array e todos os elementos são entendidos como parametros unicos.

function multiply(multiplier, ...theArgs) {
  return theArgs.map(function (element) {
    return multiplier * element;
  });
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]