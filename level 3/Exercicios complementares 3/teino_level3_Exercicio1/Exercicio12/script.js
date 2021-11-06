document.getElementById('verifica').addEventListener('click', (e) => {
    e.preventDefault();
    let val1 = parseInt(valor1.value);
    let val2 = parseInt(valor2.value);
    let val3 = parseInt(valor3.value);

    console.log(val1);
    console.log(val2);
    console.log(val3);

    let maior;
    let menor;

    if (val1 > val2 && val2 > val3) {
        maior = val1;
        menor = val3;
    } else if (val1 > val3 && val3 > val2) {
        maior = val1;
        menor = val2;
    } else if (val2 > val1 && val1 > val3) {
        maior = val2;
        menor = val3;
    } else if (val2 > val3 && val3 > val1) {
        maior = val2;
        menor = val1;
    } else if (val3 > val1 && val1 > val2) {
        maior = val3;
        menor = val2;
    } else if (val3 > val2 && val2 > val1) {
        maior = val3;
        menor = val1;
    } else {

    }


    let card = document.getElementById('card');

    card.innerHTML = `<p>Result: maior numero : ${maior} e menor numero : ${menor}</p>`;
});