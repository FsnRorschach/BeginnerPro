document.getElementById('dolar').addEventListener('click', (e) => {
    e.preventDefault();
    let val1 = valor1.value;
    let dolar = 5.60;
    let result = Number(val1) / dolar;
    console.log(val1);
    console.log(result);
    let card = document.getElementById('card');

    card.innerHTML = `<p>Result: $${result.toFixed(2)}</p>`;
});
document.getElementById('euro').addEventListener('click', (e) => {
    e.preventDefault();
    let val1 = valor1.value;
    let dolar = 6.50;
    let result = Number(val1) / dolar;
    console.log(val1);
    console.log(result);
    let card = document.getElementById('card');

    card.innerHTML = `<p>Result: E$${result.toFixed(2)}</p>`;
});