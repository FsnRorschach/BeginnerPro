window.onload = function () {
    console.log('Onload disparado');
    document.querySelector('#media').focus();
};

let var_media;
let var_preco;
let var_quilometros_dia;
let var_dias_semana;
let msgvazia;
let array_card_modal = [];

// escutar de click no buttom do form
document.querySelector('form button').addEventListener('click', (evt) => {
    //previne o reload na pagina quando executa o submit no botao do formulario
    evt.preventDefault();
    //pega valores digitados nos inputs do form e atribui nas variaveis
    var_media = media.value;
    var_preco = preco.value;
    var_quilometros_dia = quilometros_dia.value;
    var_dias_semana = dias_semana.value;
    //valida campos vazios
    validField(var_media, var_preco, var_quilometros_dia, var_dias_semana);
    console.log(msgvazia);
    if (msgvazia != true) {
        //chamando as funções para calcular os gastos
        let gast_dia = gasto_diario(var_quilometros_dia, var_media, var_preco);
        let gast_sem = gasto_semanal(var_quilometros_dia, var_media, var_preco, var_dias_semana);
        let gast_men = gasto_mensal(var_quilometros_dia, var_media, var_preco);
        let gast_anu = gasto_anual(var_quilometros_dia, var_media, var_preco);
        // chamar function de inserir conteudo no Modal
        card_modal(gast_dia, gast_sem, gast_men, gast_anu);
    }
});
// function valida campos vazios
function validField(valueMedia, valuePreco, valueKM, valueDiaSem) {
    let msg = '';

    if (valueMedia == '' || valueMedia == null || valueMedia == undefined) {
        msg += "Campo 'Média de Consumo' vazio, preencha com um valor válido! \n";
    }
    if (valuePreco == '' || valuePreco == null || valuePreco == undefined) {
        msg += "Campo 'Preço Pago' vazio, preencha com um valor válido! \n";
    }
    if (valueKM == '' || valueKM == null || valueKM == undefined) {
        msg += "Campo 'Km por dia' vazio, preencha com um valor válido! \n";
    }
    if (valueDiaSem == '' || valueDiaSem == null || valueDiaSem == undefined) {
        msg += "Campo 'Quantos dias da semana' vazio, preencha com um valor válido! \n";
    }

    if (msg != '') {
        msgvazia = true;
        return alert(msg);
    } else {
        msgvazia = '';
    }
}

// function para calcular o gasto diario
let gasto_diario = (km_dia, km_med_lit, preco_lit) => {
    return parseFloat(parseFloat((preco_lit / km_med_lit) * km_dia).toFixed(2));
};

// fucntion para calcular o gasto semanal
let gasto_semanal = (km_dia, km_med_lit, preco_lit, qtd_dias_sem) => {
    return parseFloat(parseFloat(((preco_lit / km_med_lit) * km_dia) * qtd_dias_sem).toFixed(2));
};

// fucntion para calcular o gasto mensal
let gasto_mensal = (km_dia, km_med_lit, preco_lit) => {
    return parseFloat(parseFloat(((preco_lit / km_med_lit) * km_dia) * 30).toFixed(2));
};

// fucntion para calcular o gasto anual
let gasto_anual = (km_dia, km_med_lit, preco_lit) => {
    return parseFloat(parseFloat(((preco_lit / km_med_lit) * km_dia) * 365).toFixed(2));
};

//function de criar o card modal
let card_modal = (gastDia, gastSem, gastmen, gastAnu) => {
    mostrar_modal();
    const div_modal = document.querySelector('#resultado div table tbody');
    const tr_modal = document.createElement('tr');
    if (!document.querySelector('#resultado div table tbody tr')) {
        div_modal.appendChild(tr_modal);
    }
    tr_modal.innerHTML = `
                            <td id="dia">${gastDia}</td>
                            <td id="sem">${gastSem}</td>
                            <td id="mes">${gastmen}</td>
                            <td id="ano">${gastAnu}</td>
                            `;
};

// function para mostrar modal e esconder a tela de captura de dados
let mostrar_modal = () => {
    document.querySelector('form').style.opacity = 0.3;
    document.querySelector('body h3').style.opacity = 0.3;
    document.getElementById('resultado').style.visibility = 'visible';
};

// button salvar no historico
document.getElementById('salvar').addEventListener('click', () => {
    let dia = document.getElementById('dia').textContent;
    let sem = document.getElementById('sem').textContent;
    let mes = document.getElementById('mes').textContent;
    let ano = document.getElementById('ano').textContent;
    let data = formatDate();

    array_card_modal.push({
        data: data,
        val_media_car: var_media,
        val_preco_gas: var_preco,
        gasto_diario: dia,
        gasto_semanal: sem,
        gasto_mensal: mes,
        gasto_anual: ano
    });
    descarta_modal();
    setar_modal_historico(array_card_modal);
});

// function de seta no historico
let setar_modal_historico = (arrayCM) => {
    mostrar_modal_historico();
    const div_modal_hist = document.querySelector('#historico div table tbody');
    deletaHistorico();
    arrayCM.forEach((element, index) => {
        const tr_modal_hist = document.createElement('tr');
        tr_modal_hist.setAttribute('class', 'tb_rows-hist');
        div_modal_hist.appendChild(tr_modal_hist);
        tr_modal_hist.innerHTML += `
                                <td id="data">${arrayCM[index].data}</td>
                                <td id="preco_comb">${arrayCM[index].val_preco_gas}</td>
                                <td id="media_km-lit">${arrayCM[index].val_media_car}</td>
                                <td id="dia">${arrayCM[index].gasto_diario}</td>
                                <td id="sem">${arrayCM[index].gasto_semanal}</td>
                                <td id="mes">${arrayCM[index].gasto_mensal}</td>
                                <td id="ano">${arrayCM[index].gasto_anual}</td>
                                <td id="action"><span class="material-icons" id="lixeira" onclick="deletalinha(${index})">
                                delete
                                </span></td>
                                `;

    });
};

// formata vizualização da data e hora
let formatDate = () => {
    let data = new Date();
    let d = data.getDate();
    let m = data.getMonth();
    let a = data.getFullYear();
    let h = formtHora(data.getHours());
    let min = formtHora(data.getMinutes());
    let seg = formtHora(data.getSeconds());
    let dataAtual = d + "/" + m + "/" + a + "  " + h + ":" + min + "'" + seg;
    return dataAtual;
};

// formata o digitos da hora, minutos e segundos
let formtHora = (val) => {
    let format = val.toString();
    if (format.length == 1) {
        return "0" + format;
    } else {
        return format;
    }

};

// function para mostrar modal historico e esconder a tela de captura de dados
let mostrar_modal_historico = () => {
    document.querySelector('form').style.opacity = 0.3;
    document.querySelector('body h3').style.opacity = 0.3;
    document.getElementById('resultado').style.visibility = 'hidden';
    document.getElementById('historico').style.visibility = 'visible';
};

// button descartar
document.getElementById('descartar').addEventListener('click', () => {
    descarta_modal();
    limpaForm();
});

// function descarta dados do modal
let descarta_modal = () => {
    const tr_modal = document.querySelector("#resultado div table tbody tr");
    if (tr_modal) {
        tr_modal.remove();
    }
};

// limpa o formulario e esconde os modais
let limpaForm = () => {
    document.querySelector('form').style.opacity = 1;
    document.querySelector('body h3').style.opacity = 1;
    document.getElementById('resultado').style.visibility = 'hidden';
    document.getElementById('historico').style.visibility = 'hidden';
    document.querySelector('form').reset();
    document.querySelector('#media').focus();
};


// fechar modal historico
document.getElementById('fechar-historico').addEventListener('click', () => {
    descarta_modal();
    deletaHistorico();
    limpaForm();
});

// ver historico
document.getElementById('ver-historico').addEventListener('click', () => {
    atualizaModalhistorico();
});

let atualizaModalhistorico = () => {
    if (array_card_modal.length > 0) {
        setar_modal_historico(array_card_modal);
    } else {
        zerohistoricos();
    }
};

// percorrer e pegar alinha da tabela
let deletalinha = (index) => {
    array_card_modal.splice(index, 1);
    atualizaModalhistorico();
};

document.getElementById('excluir-registros').addEventListener('click', () => {
    array_card_modal = [];
    zerohistoricos();
});

// deleta historico
let deletaHistorico = () => {
    const div_modal_hist = document.querySelector('#historico div table tbody');
    div_modal_hist.innerHTML = '';
};

// se nao houver historicos, exibe modal zerohistoricos
let zerohistoricos = () => {
    document.querySelector('form').style.opacity = 0.3;
    document.querySelector('body h3').style.opacity = 0.3;
    document.getElementById('resultado').style.visibility = 'hidden';
    document.getElementById('historico').style.visibility = 'hidden';
    document.getElementById('zero-registros').style.visibility = 'visible';
    setTimeout(() => {
        document.getElementById('zero-registros').style.visibility = 'hidden';
        limpaForm();
    }, 3000);
};