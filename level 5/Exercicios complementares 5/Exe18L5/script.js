const pessoa = {
    nome: 'Lucas',
    idade: 23,
    profissao: 'Instrutor'
};

let pessoa1;

function convertJSON(obj) {

    if (typeof (obj) == "object") {

        console.log(pessoa);
        Object.keys(pessoa).forEach(function (val) {
            if (!pessoa1) {
                pessoa1 = `{"${val.toString()}":"${pessoa[val].toString()}",`;
            } else if (pessoa1 != "{") {
                pessoa1 += `"${val.toString()}":"${pessoa[val].toString()}",`;
            }


        });
        console.log(pessoa1.length);
        pessoa1 = pessoa1.substring(0, pessoa1.length - 1);
        pessoa1 += `}`;

        console.log(JSON.parse(pessoa1));
    }
    return pessoa1;

}
console.log(convertJSON(pessoa));