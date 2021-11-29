const array = [{
        "id": 01,
        "nome": "Fabio",
        "funcao": "Desenvolvedor"
    },
    {
        "id": 02,
        "nome": "André",
        "funcao": "Analista",
        "admin": "sim"
    },
    {
        "id": 03,
        "nome": "Monica",
        "funcao": "Compras",
        "observacao": [{
            "promocao": "6",
            "cargo anterior": "vendedor"
        }]
    }
];

console.log(array);

for (let i = 0; i < array.length; i++) {
    console.log("Percorrendo array " + array[i]["id"]);
    console.log("Percorrendo array " + array[i]["nome"]);
    console.log("Percorrendo array " + array[i]["funcao"]);
    if (array[i]["observacao"]) {
        array[i]["observacao"].forEach(element => {
            console.log("Percorrendo observação: " + element["promocao"]);
            console.log("Percorrendo observação: " + element["cargo anterior"]);
        });
    }
}