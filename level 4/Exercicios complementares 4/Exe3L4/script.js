const pessoa = {
    nome: "Otávio",
    idade: 23,
    profissao: "Desenvolvedor"
};

Object.keys(pessoa).forEach(function (key) {
    pessoa[key] = "";
    console.log(pessoa);
});