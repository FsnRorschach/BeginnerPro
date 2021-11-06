document.getElementById('verifica').addEventListener('click', (e) => {
    e.preventDefault();

    let val = valor1.value;

    console.log(val);

    if (val < 0) {
        card.innerHTML = `<p>O numero ${val} é negativo.</p>`;
    } else if (val == 0) {
        card.innerHTML = `<p>O numero ${val} é nulo.</p>`;
    } else {
        card.innerHTML = `<p>O numero ${val} é positivo.</p>`;
    }


});