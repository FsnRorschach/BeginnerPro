const nomes = ['Otávio', 'Lucas', 'Gabriel', 'Claudemir'];

nomes.map(function (nome) {
    console.log("nome: " + nome + ", Tamanho: " + nome.length);
});

nomes.map((nome) => {
    console.log("nome: " + nome + ", Tamanho: " + nome.length);
});

nomes.map(nome => console.log("nome: " + nome + ", Tamanho: " + nome.length));