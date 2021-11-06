document.getElementById('verifica').addEventListener('click', (e) => {
    e.preventDefault();

    let val = valor1.value;
    let result = val % 2;

    console.log(val);
    console.log(result);

    if (result == 0) {
        card.innerHTML = `<p>O numero ${val} é par.</p>`;
    } else {
        card.innerHTML = `<p>O numero ${val} é impar.</p>`;
    }


});