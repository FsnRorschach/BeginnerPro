document.getElementById('enviar').addEventListener('click', (e) => {
    e.preventDefault();

    let string = document.querySelector('p').textContent;
    let stringlength = string.length;
    console.log(stringlength);

    let result = stringlength * 628.981291;

    console.log(result);

    card.innerHTML = `<p>Retorno com 3 casas decimais:  ${result.toFixed(3)}.</p>`;


});