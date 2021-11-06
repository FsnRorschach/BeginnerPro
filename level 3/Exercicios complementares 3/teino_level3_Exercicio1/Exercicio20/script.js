document.getElementById('calcular').addEventListener('click', (e) => {
    e.preventDefault();

    let val = valor1.value;
    let mesesCont = meses.value;
    let resultJuros = val * mesesCont * 0.02;
    let resulTotal = parseInt(resultJuros) + parseInt(val);


    card.innerHTML = `<p>O valor total do juros é de R$${resultJuros.toFixed(2)} e o valor total é R$${resulTotal.toFixed(2)}.</p>`;
});

document.getElementById('calcularLot').addEventListener('click', (e) => {
    e.preventDefault();

    let val = parseInt(valor12.value);
    let randomVal = Math.floor(Math.random() * 10);

    console.log(val);
    console.log(randomVal);

    if (val == randomVal) {
        card.innerHTML = `<p>Parabéns você acertou ! o numero sorteado foi ${randomVal}.</p>`;
    } else {
        card.innerHTML = `<p>Errou! tente novamente, o numero sorteado foi ${randomVal}.</p>`;
    }

});