document.getElementById('gerar').addEventListener('click', (e) => {
    e.preventDefault();
    let valorrandom1 = Math.floor(Math.random() * 10);
    console.log(valorrandom1);
    document.getElementById('input1').value = valorrandom1;
    let valorrandom2 = Math.floor(Math.random() * 10);
    console.log(valorrandom2);
    document.getElementById('input2').value = valorrandom2;

});

document.getElementById('calcular').addEventListener('click', (e) => {
    e.preventDefault();
    let val1 = document.getElementById('input1').value;
    console.log(val1);
    let val2 = document.getElementById('input2').value;
    console.log(val2);

    let result = Math.pow(val1, val2);
    console.log(result);

    card.innerHTML = `<p>A potencia dos numeros gerados é :  ${result}.</p>`;
});