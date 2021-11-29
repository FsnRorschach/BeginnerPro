14- Explique .forEach() e dê um exemplo de aplicação com a sintaxe.

Função forEach é uma função que percorre um array utilizando um callback ('que é uma função que é executada como argumento de outra função'),
no caso do ForEach ele recebe uma função callback que recebe 3 argumentos:
o valor corrente que é obrigatório ser passado, para retornar o valor corrente,
o valor index, que é opcional, no caso mostra o indice do valor corrente em que a função está iterando,
o array, que é opcional, no caso mostra o array que está sendo aplicada a iteração,
o thisArg que é o valor a ser usado como this. ao ser executado o callback.

array.forEach(callback(valor , index , [array], thisArg));

[1,2,3].forEach((valor,index)=>{
    console.log(valor, index);
})

print:
//valor , index
// 1    , 0
// 2    , 1
// 3    , 2