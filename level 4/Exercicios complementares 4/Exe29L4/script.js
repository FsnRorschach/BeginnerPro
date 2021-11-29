let arr = [{
    nome: "Otávio"
}, {
    nome: "Lucas"
}, {
    nome: "Gabriel"
}];

let filtro = arr.filter(value => (value.nome == "Otávio"));
console.log(filtro);