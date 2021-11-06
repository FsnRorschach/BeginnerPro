let formUser = document.getElementById('form_usuario');
let formCal = document.getElementById('form_calc');
let mod = document.getElementById('modal');

document.getElementById('button_Usuario').addEventListener('click', (e) => {
    e.preventDefault();

    let nome = formUser.nome.value;
    let idade = formUser.idade.value;

    let idademeses = idade * 12;
    console.log("Idade meses: " + idademeses);
    let idadedias = idade * 365;
    console.log("Idade dias: " + idadedias);
    let idadehoras = idade * 365 * 24;
    console.log("Idade horas: " + idadehoras);

    alert(`Olá ${nome} , 
        a sua idade em meses é : ${idademeses},
        a sua idade em dias é  : ${idadedias},
        a sua idade em dias é  : ${idadehoras}.`);
});

document.getElementById('button_Calc').addEventListener('click', (e) => {
    e.preventDefault();

    // circunferencia e area
    let raio = formCal.raioCirculo.value;
    console.log(raio);
    let circunResult = 2 * 3.14 * raio;
    console.log(circunResult);
    let areaResult = 3.14 * raio;
    console.log(areaResult);

    document.getElementById('resdivRaio').innerHTML = `<p id="respCirculo">A circunferência do circulo é ${circunResult}.
                                                                            A área do circulo é ${areaResult}.</p>`;

    // base do cubo, area volume, area total , area lateral
    let baseCubo = formCal.baseCubo.value;
    console.log(baseCubo);
    let areabase = Math.pow(baseCubo, 2);
    console.log(areabase);
    let volCubo = Math.pow(baseCubo, 3);
    console.log(volCubo);
    let areaTotalCubo = baseCubo * 6;
    console.log(areaTotalCubo);
    let arealateral = 4 * Math.pow(baseCubo, 2);
    console.log(arealateral);

    document.getElementById('resdivBaseCubo').innerHTML = `<p id="respCubo">A área do Cubo é ${areabase}.
                                                                            O volume do Cubo é ${volCubo}.
                                                                            A área total do Cubo é ${areaTotalCubo}.
                                                                            A área lateral do Cubo é ${arealateral}.</p>`;

    // base do trapezio 
    let baseMaiorT = formCal.baseMaiorTrap.value;
    console.log(baseMaiorT);
    let baseMenorT = formCal.baseMenorTrap.value;
    console.log(baseMenorT);
    let altTrap = formCal.altTrap.value;
    console.log(altTrap);
    let areaTrapezio = (((baseMaiorT + baseMenorT) * altTrap) / 2);
    console.log(areaTrapezio);

    document.getElementById('resdivBaseAltTrap').innerHTML = `<p id="respTrapezio">A área do Trapézio é ${areaTrapezio}.</p>`;

});

document.getElementById('button_math').addEventListener('click', (e) => {
    e.preventDefault();
    // desafio math
    let pokemon;
    let pokeName = ['pidgey', 'rattata', 'zubat', 'pikachu', 'horsea', 'weedle', 'seel', 'cubone', 'golduck', 'gastly'];
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

    let randomS = Math.floor(Math.random() * 10);

    console.log(randomS);

    requestPokeInfo(baseUrl, pokeName[randomS]);

    function requestPokeInfo(url, name) {
        fetch(url + name)
            .then(response => response.json())
            .then(data => {
                pokemon = data;
                console.log(pokemon);
            })
            .catch(err => console.log(err));
    }

    setTimeout(() => {
        let card = `<img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" id="poke" width="150px">
                    <p>${pokemon.name}</p>
                    `;
        document.getElementById('figure_img').innerHTML = card;
    }, 1000);

});