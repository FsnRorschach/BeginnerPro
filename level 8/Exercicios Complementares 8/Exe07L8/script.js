let numbers = [1, 9, 32, 27, 90];

function divisao(number, index) {
    console.log("Numero divisivel por 9 é : " + number + " na posição " + index + " no array.");
}

function dividir9(funcaoDeCallback) {
    let value;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 9 == 0) {
            value = numbers[i];
            funcaoDeCallback(value, i);
        }
    }
}

dividir9(divisao);