//declara o array
let numSorte = [];
let numSorteados = [];
// cria uma função que escuta o click do botao
document.getElementById('jogar').addEventListener('click', (evt) => {
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

    let returnValid = validOnlyNumber(numSorte);

    if (returnValid == false) {
        return;
    }

    // for para setar no novo array os numeros sorteados
    for (let i = 0; i < 6; i++) {
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
    let divTemplate = document.getElementById('conteiner_card');
    document.getElementById('conteiner_card').style.display = 'block';
    divTemplate.innerHTML = `
                                <div id="card1">
                                    <p>Numeros do Sorteados</p>
                                </div>
                                <div id="card2">
                                    <input type="text" class="resultSorte"  value="${numSorteados[0]}">
                                    <input type="text" class="resultSorte"  value="${numSorteados[1]}">
                                    <input type="text" class="resultSorte"  value="${numSorteados[2]}">
                                    <input type="text" class="resultSorte"  value="${numSorteados[3]}">
                                    <input type="text" class="resultSorte"  value="${numSorteados[4]}">
                                    <input type="text" class="resultSorte"  value="${numSorteados[5]}">
                                </div>
                                <div id="card3">
                                    <p>Que pena, tente novamente!</p>
                                </div>
                            `;
};

let tempganhou = () => {
    let divTemplate = document.getElementById('conteiner_card');
    document.getElementById('conteiner_card').style.display = 'block';
    divTemplate.innerHTML = `
                                <div id="card1">
                                    <p>Numeros do Sorteados</p>
                                </div>
                                <div id="card2">
                                    <input type="text" class="resultSorte"  value="${numSorteados[0]}">
                                    <input type="text" class="resultSorte"  value="${numSorteados[1]}">
                                    <input type="text" class="resultSorte"  value="${numSorteados[2]}">
                                    <input type="text" class="resultSorte"  value="${numSorteados[3]}">
                                    <input type="text" class="resultSorte"  value="${numSorteados[4]}">
                                    <input type="text" class="resultSorte"  value="${numSorteados[5]}">
                                </div>
                                <div id="card3">
                                    <p>Você ganhou na Mega!!!</p>
                                </div>
                            `;
};

// Busca numero aleatorio
let getRandomInt = () => {
    const min = Math.ceil(1);
    const max = Math.floor(60);
    return Math.floor(Math.random() * (max - min)) + min;
};

// valida campos vazios
let validOnlyNumber = (val) => {
    let msg = "";

    for (let o = 0; o < val.length; o++) {
        if (isNaN(val[o])) {
            console.log(val.num1);
            msg += "Campo " + [o + 1] + " vazio, preencha para continuar.\n";
        }
    }

    if (msg != "") {
        alert(msg);
        return false;
    }
};

// botao limpar inputs
document.getElementById('limpar').addEventListener('click', (evt) => {
    evt.preventDefault();
    document.getElementById('conteiner_card').style.display = 'none';
    let divTemplate = document.getElementById('conteiner_card');
    divTemplate.innerHTML = "";
    document.querySelector('form').reset();
});
// função de verificar valores repetidos chamada através do onblur no html
function validRepetNumber(aposta) {
    console.log("Aposta: " + aposta.value);

    // iterador forEach pegando todos os inputs e verificando os valores se existe algum em igualdade
    document.querySelectorAll('input').forEach((val, index) => {
        console.log(val.value);
        console.log(aposta.value);
        console.log(val.id);
        console.log(index);
        // verifica se existe igualdade
        if (aposta.value == val.value && aposta.id != val.id) {
            console.log("Valor repetido, por favor insira outro valor");
            // se existe limpa e mantem o focu
            document.getElementById(aposta.id).value = '';
            document.getElementById(aposta.id).focus();
        }
    });
}