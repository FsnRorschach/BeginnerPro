let arraySalariosAno = [];
let arrayMeses = [];
let arraySalarios = [];
document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    let mesProv = mes.value.split('-');
    let mesValue = mesProv[0];
    let mesId = mesProv[1];
    let salarioValue = salario.value;
    salarioValue = salarioValue.replace('.', '').replace(',', '.');

    if (mesValue && salarioValue) {
        arraySalariosAno.push({
            "id": mesId,
            "mes": mesValue,
            "salario": salarioValue
        });

        document.getElementById(mesValue).remove();
        mes.value = '';
    }
    ordena(arraySalariosAno);
    arrayMeses = [];
    arraySalarios = [];
    arraySalariosAno.forEach(value => {
        arrayMeses.push(value.mes);
        arraySalarios.push(value.salario);
    });
    myChart1();
    salario.value = '';
});

function ordena(num) {
    num.sort((a, b) => {
        return a.id - b.id;
    });
}

function validaMoeda(salario) {
    if (typeof salario === "undefined" || salario == null) return 0;
    let valor = '';
    if (typeof salario.value !== "undefined") {
        valor = salario.value;
    } else {
        valor = salario;
    }
    if (valor.length == 2) return valor;
    let v = valor;
    v = v.replace(/\D/g, '');
    v = v.replace(/(\d{1,2})$/, ',$1');
    v = v.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    document.getElementById('salario').value = v;
}

document.getElementById('reiniciar').addEventListener('click', e => {
    e.preventDefault();
    document.location.reload(true);
});