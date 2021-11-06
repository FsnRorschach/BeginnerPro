document.getElementById('conferir').addEventListener('click', (e) => {
    e.preventDefault();

    let string1 = string.value;
    let numero1 = numero.value;
    let result = string1.length;

    console.log(string1);
    console.log(result);
    console.log(numero1);

    if (result == numero1) {
        card.innerHTML = `<p>Você acertou a quantidade de caracteres : ${result}</p>`;
    } else if (result < numero1) {
        card.innerHTML = `<p>Você errou a quantidade de caracteres : ${result}</p>
                        <p>Esta string tem ${numero1 - result} caracteres a menos</p>
                        `;
    } else {
        card.innerHTML = `<p>Você errou a quantidade de caracteres : ${result}</p>
                        <p>Esta string tem ${result - numero1} caracteres a mais</p>
                        `;
    }

});