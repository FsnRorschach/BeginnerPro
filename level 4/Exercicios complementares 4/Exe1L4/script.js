const pessoas = {
    "Lucas": {
        profissao: "instrutor",
        idade: 23
    },
    "Claudemir": {
        profissao: "Gamer",
        idade: 28
    },
    "Marcela": {
        profissao: "Head de Marketing",
        idade: 27
    },
    "Fabio": {
        profissao: "Desenvolvedor",
        idade: 38
    }
};

Object.keys(pessoas).forEach(function (pessoa) {
    console.log(`${pessoa} é ${pessoas[pessoa].profissao} e tem ${pessoas[pessoa].idade} anos`)
});

const animais = {
    "Leão": "Africa",
    "Capivara": "Brasil",
    "Canguru": "Australia",
    "Tigre": "India"
};

for (const key in animais) {
    if (animais.hasOwnProperty(key)) {
        console.log(`O ${key} mora na ${animais[key]}`);
    }
}

const carros = {
    Vectra: {
        cor: "cinza",
        ano: 2002
    },
    Civic: {
        cor: "preto",
        ano: 1995
    },
    Passat: {
        cor: "vermelho",
        ano: 1992
    }
};
Object.keys(carros).forEach(function (car) {

    console.log(`O ${car} é da cor ${carros[car].cor} e ano ${carros[car].ano}`);

});

const bares = {
    "Pé na jaca": {
        local: "Rodrigo Soares de Oliveira , 526, Anhangabau, Jundia -SP",
        nota: 4.5
    },
    "The Champions": {
        local: "Av, 9 Julho, 1700",
        nota: 4.5
    },
    "O Santuario": {
        local: "R Barão de Teffé, 318",
        nota: 4.5
    }
};

Object.keys(bares).forEach(function (bar) {

    console.log(`O ${bar} é o melhor e está localizado na ${bares[bar].local} e a nota é ${bares[bar].nota}`);

});