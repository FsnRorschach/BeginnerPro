import {
    getLocalStorage,
    setLocalStorage
} from './localStorage.js';

import {
    formatDate
} from './formatDate.js';

import {
    listCadastro
} from './script.js';

let objcad = {};
let editIndex = "";
let listSearch = [];

let alertPlaceholder = document.getElementById('liveAlertPlaceholder');

export function mostraCadastro() {
    document.getElementById('sec_btn_cadastrar').style.display = "none";
    document.getElementById('sec_iframe1').style.display = "none";
    document.getElementById('sec_table').style.display = "none";
    document.getElementById('sec_form').style.display = "block";
    clearForm();
}

export function mostraLista() {
    document.getElementById('sec_btn_cadastrar').style.display = "block";
    document.getElementById('sec_iframe1').style.display = "none";
    document.getElementById('sec_table').style.display = "block";
    document.getElementById('sec_form').style.display = "none";
}

export function mostraIframe() {
    document.getElementById('sec_btn_cadastrar').style.display = "block";
    document.getElementById('sec_iframe1').style.display = "block";
    document.getElementById('sec_table').style.display = "none";
    document.getElementById('sec_form').style.display = "none";
}

export function closeAlert() {
    document.getElementById('sec_alert').style.display = 'none';
    document.getElementById('modal-fundo').style.display = 'none';
}

export function deletalinha() {
    let listItems = document.querySelectorAll('.table-btn-deletalinha');
    for (let item of listItems) {
        item.onclick = () => {
            listCadastro.splice(item.id, 1);
            setLocalStorage();
            window.onload();
        };
    }

}

export let editalinha = () => {
    let itemEditlist = document.querySelectorAll('.table-btn-editalinha');
    for (let item of itemEditlist) {
        item.onclick = () => {

            mostraCadastro();

            document.getElementById('nome').value = listCadastro[item.id].nome;
            document.getElementById('sobrenome').value = listCadastro[item.id].sobrenome;
            document.getElementById('rg').value = listCadastro[item.id].rg;
            document.getElementById('cpf').value = listCadastro[item.id].cpf;
            document.getElementById('email').value = listCadastro[item.id].email;
            document.getElementById('telefone').value = listCadastro[item.id].telefone;
            document.getElementById('cep').value = listCadastro[item.id].cep;
            document.getElementById('numero').value = listCadastro[item.id].numero;
            document.getElementById('rua').value = listCadastro[item.id].rua;
            document.getElementById('bairro').value = listCadastro[item.id].bairro;
            document.getElementById('cidade').value = listCadastro[item.id].cidade;
            document.getElementById('estado').value = listCadastro[item.id].estado;

            // edt = true;
            editIndex = item.id;
        };
    }

};

export function setCadastro(obj) {
    listCadastro.unshift(obj);
    setLocalStorage();
    window.onload();
}

export function setEditCadastro(obj) {
    listCadastro[editIndex] = obj;
    setLocalStorage();
    window.onload();
}

export function searchUser(evt) {
    let search = evt.target.value.toLowerCase();
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
}

export function cadastrar() {

    let msg = false;

    let nome = document.getElementById('nome').value.trim();
    let sobrenome = document.getElementById('sobrenome').value.trim();
    let rg = document.getElementById('rg').value.trim();
    let cpf = document.getElementById('cpf').value.trim();
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
        "rg": rg,
        "cpf": cpf,
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
}

let chkNullfield = (objcad) => {
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

let clearForm = () => {
    document.querySelectorAll('input').forEach(input => {
        const campo = input.getAttribute('id');
        input.value = "";
        input.style.color = "black";
        input.style.borderColor = "inherit";
    });
};

export let setList = (params) => {
    deletaList();
    const sec_list = document.querySelector('#sec_table table tbody');
    let list;
    if (params == "Lcadastro") {
        list = listCadastro;
    } else if (params == "Lsearch") {
        list = listSearch;
    }
    list.forEach((element, index) => {
        const tr_list = document.createElement('tr');
        tr_list.setAttribute('class', 'row');
        sec_list.appendChild(tr_list);
        tr_list.innerHTML += `                                    
                                <td class="col-md-1">${list[index].nome[0].toUpperCase() + list[index].nome.substr(1)} ${list[index].sobrenome[0].toUpperCase() + list[index].sobrenome.substr(1)}</td>
                                <td class="col-md-1">${list[index].rg}</td>
                                <td class="col-md-1">${list[index].cpf}</td>
                                <td class="col-md-2">${list[index].email}</td>
                                <td class="col-md-1">${list[index].telefone}</td>
                                <td class="col-md-1">${list[index].cidade} -md- ${list[index].estado}</td>
                                <td class="col-md-2">${list[index].rua}, ${list[index].numero}</td>
                                <td class="col-md-1">${list[index].data}</td>
                                <td class="col-md-1 edt"><span class="table-btn-editalinha" id="${index}">
                                <img src="icon/edit-2.svg" alt="" width="30" height="24">
                                </span></td>
                                <td class="col-md-1 cls"><span class="table-btn-deletalinha" id="${index}">
                                <img src="icon/user-x.svg" alt="" width="30" height="24">
                                </span></td>
                            `;
    });
};

export let alert = (message, type) => {
    document.getElementById('div-alert').setAttribute('class', `alert alert-${type}`);
    document.getElementById('span-alert').innerText = ` Beginners PRO: ${message}`;
    document.getElementById('modal-fundo').style.display = 'block';
    document.getElementById('sec_alert').style.display = 'block';
};

export let deletaList = () => {
    const sec_list = document.querySelector('#sec_table table tbody');
    sec_list.innerHTML = '';
};

function scroolToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}