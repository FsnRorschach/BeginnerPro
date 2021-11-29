const pessoa = {
    nome: "Otávio",
    idade: 22
};

let Item = () => {
    localStorage.setItem('pessoa', JSON.stringify(pessoa));
};

Item();