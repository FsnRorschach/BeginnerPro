var pessoas = [{
        nome: "Otávio",
        sobrenome: "Barros",
        idade: 23
    },
    {
        nome: "Lucas",
        sobrenome: "Santos",
        idade: 24
    },
    {
        nome: "Gabriel",
        sobrenome: "Schin",
        idade: 18
    },
    {
        nome: "Claudemir",
        sobrenome: "Silva",
        idade: 39
    }
]

for (let i = 0; i < pessoas.length; i++) {
    console.log("Esse é a posição " + i + " do Array pessoas, com 'nome: '" + pessoas[i].nome + ", 'sobrenome: '" + pessoas[i].sobrenome + " e 'idade: '" + pessoas[i].idade);
}