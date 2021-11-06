document.getElementById('somar').addEventListener('click', (e) => {
    e.preventDefault();
    let val1 = valor1.value;
    let val2 = valor2.value;
    let result = Number(val1) + Number(val2);
    console.log(val1);
    console.log(val2);
    console.log(result);
    let card = document.getElementById('card');

    card.innerHTML = `<p>Result: ${result}</p>`;
});
document.getElementById('subtrair').addEventListener('click', (e) => {
    e.preventDefault();
    let val1 = valor1.value;
    let val2 = valor2.value;
    let result = Number(val1) - Number(val2);
    console.log(val1);
    console.log(val2);
    console.log(result);
    let card = document.getElementById('card');

    card.innerHTML = `<p>Result: ${result}</p>`;
});
document.getElementById('multi').addEventListener('click', (e) => {
    e.preventDefault();
    let val1 = valor1.value;
    let val2 = valor2.value;
    let result = Number(val1) * Number(val2);
    console.log(val1);
    console.log(val2);
    console.log(result);
    let card = document.getElementById('card');

    card.innerHTML = `<p>Result: ${result}</p>`;
});
document.getElementById('dividir').addEventListener('click', (e) => {
    e.preventDefault();
    let val1 = valor1.value;
    let val2 = valor2.value;
    let result = Number(val1) / Number(val2);
    console.log(val1);
    console.log(val2);
    console.log(result);
    let card = document.getElementById('card');

    card.innerHTML = `<p>Result: ${result}</p>`;
});