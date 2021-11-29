//declara o array
let numSorte = [];
let numSorteados = [];
// cria uma função que escuta o click do botao
document.querySelector('button').addEventListener('click', (evt) => {
    evt.preventDefault();

    // pega os vlores digitados nos campos do formulario
    let num1 = parseInt(number1.value);
    let num2 = parseInt(number2.value);
    let num3 = parseInt(number3.value);
    let num4 = parseInt(number4.value);
    let num5 = parseInt(number5.value);
    let num6 = parseInt(number6.value);

    // inseri os valores no array
    numSorte = [num1, num2, num3, num4, num5, num6];

    console.log(numSorte);

    // for para setar no novo array os numeros sorteados
    for (i = 0; i < 6; i++) {
        numSorteados[i] = getRandomInt();
        console.log(numSorteados);
    }
    console.log(numSorteados);

    // verificar se todos os numeros são iguais
    for (const key in numSorte) {
        if (numSorte.hasOwnProperty(key)) {
            console.log("value: " + numSorte[key] + ", key: " + key);
            let valid = numSorteados.some(value => value == numSorte[key]);
            if (valid == false) {
                console.log("vc perdeu");
                tempPerdeu();
                return;
            } else {
                tempganhou();
            }
        }
    }
});

// template
let tempPerdeu = () => {
    let divTemplate = document.querySelector('div');
    divTemplate.innerHTML = `<p>Você Perdeu</p>`;
};

let tempganhou = () => {
    let divTemplate = document.querySelector('div');
    divTemplate.innerHTML = `<p>Você Ganhou, Parabéns</p>`;
};

// Busca numero aleatorio
let getRandomInt = () => {
    const min = Math.ceil(1);
    const max = Math.floor(60);
    return Math.floor(Math.random() * (max - min)) + min;
};