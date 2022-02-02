//variaveis globais
let objcad = {};
let editIndex = "";
let lasChange = "";

let alertPlaceholder = document.getElementById('liveAlertPlaceholder');
let search = document.getElementById('search');

let listCadastro = JSON.parse(localStorage.getItem('cadastros')) || [];
let listSearch = [];

window.onload = function () {
    if (listCadastro.length == 0) {
        mostraIframe();
    } else {
        mostraLista();
        setList("Lcadastro");
    }
};

let cadastrar = () => {

    let msg = false;

    let nome = document.getElementById('nome').value.trim();
    let sobrenome = document.getElementById('sobrenome').value.trim();
    let email = document.getElementById('email').value.trim();
    let telefone = document.getElementById('telefone').value.trim();
    let cep = document.getElementById('cep').value.trim();
    let numero = document.getElementById('numero').value.trim();
    let rua = document.getElementById('rua').value.trim();
    let bairro = document.getElementById('bairro').value.trim();
    let cidade = document.getElementById('cidade').value.trim();
    let estado = document.getElementById('estado').value.trim();

    objcad = {
        "nome": nome.toLowerCase(),
        "sobrenome": sobrenome.toLowerCase(),
        "email": email.toLowerCase(),
        "telefone": telefone,
        "cep": cep,
        "numero": numero,
        "rua": rua,
        "bairro": bairro,
        "cidade": cidade,
        "estado": estado,
        "data": formatDate()
    };

    msg = chkNullfield(objcad);
    if (msg == true) {
        return;
    }

    if (editIndex != "") {
        setEditCadastro(objcad);
    } else {
        setCadastro(objcad);
    }
};

let alert = (message, type) => {
    let wrapper_msg = document.createElement('div');
    wrapper_msg.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert"><img src="icon/logo-header.png" alt="" width="48" height="60"> Beginners PRO: ' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

    alertPlaceholder.append(wrapper_msg);
};

let chkNullfield = (obj) => {
    let msg = "";
    for (const property in objcad) {
        if (!objcad[property]) {
            msg += `Campo ${property} vazio, Preencha para continuar. \n`;
        }
    }
    if (msg != "") {
        alert(msg, 'danger');
        return true;
    }
};

let mostraCadastro = () => {
    document.getElementById('sec_btn_cadastrar').style.display = "none";
    document.getElementById('sec_iframe1').style.display = "none";
    document.getElementById('sec_table').style.display = "none";
    document.getElementById('sec_form').style.display = "block";
    clearForm();
};

let mostraLista = () => {
    document.getElementById('sec_btn_cadastrar').style.display = "block";
    document.getElementById('sec_iframe1').style.display = "none";
    document.getElementById('sec_table').style.display = "block";
    document.getElementById('sec_form').style.display = "none";
};

let mostraIframe = () => {
    document.getElementById('sec_btn_cadastrar').style.display = "block";
    document.getElementById('sec_iframe1').style.display = "block";
    document.getElementById('sec_table').style.display = "none";
    document.getElementById('sec_form').style.display = "none";
}

let setCadastro = (obj) => {
    listCadastro.unshift(obj);
    localStorage.setItem('cadastros', JSON.stringify(listCadastro));
    window.onload();
};

let setEditCadastro = (obj) => {
    console.log(obj);
    console.log(editIndex);
    listCadastro[editIndex] = obj;
    localStorage.setItem('cadastros', JSON.stringify(listCadastro));
    window.onload();
};

let setList = (params) => {
    deletaList();
    const sec_list = document.querySelector('#sec_table table tbody');
    let list;
    console.log(params);
    if (params == "Lcadastro") {
        list = listCadastro;
    } else if (params == "Lsearch") {
        list = listSearch;
        console.log(list);
    }
    list.forEach((element, index) => {
        const tr_list = document.createElement('tr');
        sec_list.appendChild(tr_list);
        tr_list.innerHTML += `                                    
                                <td>${list[index].nome[0].toUpperCase() + list[index].nome.substr(1)} ${list[index].sobrenome[0].toUpperCase() + list[index].sobrenome.substr(1)}</td>
                                <td>${list[index].email}</td>
                                <td>${list[index].telefone}</td>
                                <td>${list[index].cidade} - ${list[index].estado}</td>
                                <td>${list[index].rua}, ${list[index].numero}</td>
                                <td>${list[index].data}</td>
                                <td><span onclick="editalinha(${index})">
                                <img src="icon/edit-2.svg" alt="" width="30" height="24">
                                </span></td>
                                <td><span onclick="deletalinha(${index})">
                                <img src="icon/user-x.svg" alt="" width="30" height="24">
                                </span></td>
                            `;

    });
};

let clearForm = () => {
    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('cep').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('nome').focus();
};

let deletaList = () => {
    const sec_list = document.querySelector('#sec_table table tbody');
    sec_list.innerHTML = '';
};

let editalinha = (index) => {
    mostraCadastro();

    document.getElementById('nome').value = listCadastro[index].nome;
    document.getElementById('sobrenome').value = listCadastro[index].sobrenome;
    document.getElementById('email').value = listCadastro[index].email;
    document.getElementById('telefone').value = listCadastro[index].telefone;
    document.getElementById('cep').value = listCadastro[index].cep;
    document.getElementById('numero').value = listCadastro[index].numero;
    document.getElementById('rua').value = listCadastro[index].rua;
    document.getElementById('bairro').value = listCadastro[index].bairro;
    document.getElementById('cidade').value = listCadastro[index].cidade;
    document.getElementById('estado').value = listCadastro[index].estado;

    edt = true;
    editIndex = index;
};

// formata vizualização da data e hora
let formatDate = () => {
    let data = new Date();
    let d = data.getDate();
    let m = formtMonth(data.getMonth());
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

let formtMonth = (val) => {
    val = val + 1;
    let format = val.toString();
    if (format.length == 1) {
        return "0" + format;
    } else {
        return format;
    }
};

let deletalinha = (index) => {
    listCadastro.splice(index, 1);
    localStorage.setItem('cadastros', JSON.stringify(listCadastro));
    window.onload();
};

document.getElementById('email').addEventListener('blur', (element) => {
    let email = element.target.value;
    let check = validateEmail(email);
    if (check === false) {
        alert("Email inválido! Digite um email dentro do Padrão para continuar:  email@provedor.com", 'danger');
    }
});

document.getElementById('telefone').addEventListener('blur', (element) => {
    let telefone = element.target.value;
    telefone = onlynum(telefone.toString());
    if (!isNaN(telefone)) {
        let check = maskTelefone(telefone);
        if (check === false) {
            alert("Telefone inválido! Digite um telefone dentro do Padrão para continuar:  (11) 9999-9999 ou (11) 99999-9999)", 'danger');
        }
    }
});

function checkNumber(obj) {
    obj.value = onlynum(obj.value);
    if (obj.value.length > 11) {
        obj.value = obj.value.slice(0, obj.maxLength);
    }

}

// valida email
function validateEmail(email) {
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (reg.test(email)) {
        return true;
    } else {
        return false;
    }
}

// valida telefone
function maskTelefone(telefone) {
    const textoAtual = telefone.toString();
    if (textoAtual.length === 11) {
        const parte1 = textoAtual.slice(0, 2);
        const parte2 = textoAtual.slice(2, 7);
        const parte3 = textoAtual.slice(7, 11);
        textoAjustado = `(${parte1}) ${parte2} - ${parte3}`;
        document.getElementById('telefone').value = textoAjustado;
        return true;
    } else if (textoAtual.length === 10) {
        const parte1 = textoAtual.slice(0, 2);
        const parte2 = textoAtual.slice(2, 6);
        const parte3 = textoAtual.slice(6, 10);
        textoAjustado = `(${parte1}) ${parte2} - ${parte3}`;
        document.getElementById('telefone').value = textoAjustado;
        return true;
    } else {
        return false;
    }
}

function onlynum(str) {
    let numsStr = str.replace(/[^0-9]/g, '');
    return numsStr;
}

let searchUser = (evt) => {
    let search = evt.target.value.toLowerCase();
    console.log(search);
    let resultSearch = listCadastro.filter(resul => {
        return resul.nome.toLowerCase().includes(search) ||
            resul.sobrenome.toLowerCase().includes(search) ||
            resul.email.toLowerCase().includes(search);
    });

    if (resultSearch < 1) {
        listSearch = [];
        setList("Lcadastro");
    } else {
        listSearch = resultSearch;
        setList("Lsearch");
    }
};

search.oninput = (evt) => {
    mostraLista();
    searchUser(evt);
};