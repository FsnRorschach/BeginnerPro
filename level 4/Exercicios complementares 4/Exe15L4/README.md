15- Explique .map() e dê um exemplo de aplicação com a sintaxe.

A função .map() é uma função que percorre um array retornando o argumento passado na Função callback em um novo array.
Na função callback é passado os argumentos de valor atual que será iterado na vez, o indice do valor, o array e o thisArg que é opcional.

array.map(function())

exemplo:

var numero = [1,2,3];
var newArray = num.map(funtion(numero){
    return numero + 10;
})
conosle.log(numeros)
console.log(newArray)

// numeros [ 1,2,3]
// newArray [10,20,30]