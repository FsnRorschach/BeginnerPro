document.getElementById('enviar').addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Entrou no addEventListener');

    let val = document.getElementById('chance').value;
    val = parseInt(val);
    console.log(typeof (val));

    let result = chance(60, val);
    console.log(result);
    card.innerHTML = `<p>A chance de ganhar usando ${val} apostas é de  ${result}.</p>`;
});

function chances(val) {
    val = parseInt(val.innerText);
    console.log(typeof (val));
    console.log(val);
    document.getElementById('chance').value = val;
}

function fatorial(valor) {
    let fat = 1;

    while (valor >= 2) {
        fat = fat * valor;
        valor--;
    }
    return fat;
}

function chance(n, p) {
    console.log(n + " e " + p);
    let res = fatorial(n) / fatorial(p) * fatorial(n - p);
    console.log(res);
    return res;
}