import {
    mask,
    validateEmail
} from './mask.js';

import {
    getLocalStorage
} from './localStorage.js';

import {
    mostraCadastro,
    mostraLista,
    mostraIframe,
    closeAlert,
    searchUser,
    cadastrar,
    alert,
    setList,
    deletalinha,
    editalinha
} from './functions.js';

//variaveis globais

console.log("Aplicação feita por Fabio Novais, ");
console.log("para o modulo 10 do Curso Beginner PRO.");
console.log("Faculdade IV2");
console.log("https://faculdadeiv2.com.br/");

let search = document.getElementById('search');

export let listCadastro = getLocalStorage() || [];

window.onload = function () {
    if (listCadastro.length == 0) {
        mostraIframe();
    } else {
        mostraLista();
        setList("Lcadastro");
        deletalinha();
        editalinha();
    }
};

document.querySelectorAll('input').forEach(input => {
    const campo = input.getAttribute('id');
    input.addEventListener('input', e => {
        e.target.value = mask[campo](e.target.value);
    });
    input.addEventListener('paste', E => {
            E.preventDefault();
            return false;
        },
        true
    );
    input.onkeydown = function (event) {
        let tecla = event.keyCode;
        if (tecla == 13) {
            let todosFields = document.getElementsByTagName("input");
            for (let k = 0; k < todosFields.length; k++) {
                if (todosFields[k].getAttribute("id") == this.getAttribute("id")) {
                    todosFields[k + 1].focus();
                    break;

                }
            }
        }
    };
});

document.getElementById('email').addEventListener('blur', element => {
    let email = element.target.value;
    let check = validateEmail(email);
    if (check === false) {
        alert("Email inválido! Digite um email dentro do Padrão para continuar:  email@provedor.com", 'danger');
        document.getElementById('email').style.color = "red";
        document.getElementById('email').style.borderColor = "red";
    } else {
        document.getElementById('email').style.color = "green";
        document.getElementById('email').style.borderColor = "green";
    }
});

document.getElementById('nome').addEventListener('focus', element => {
    let nome = element.target.value;
    if (nome.length >= 3) {
        document.getElementById('nome').style.color = "black";
        document.getElementById('nome').style.borderColor = "inherit";
    }
});

document.getElementById('nome').addEventListener('blur', element => {
    let nome = element.target.value;
    if (nome.length < 3) {
        alert("O nome deve conter mais de 2 caracteres.", 'danger');
        document.getElementById('nome').style.color = "red";
        document.getElementById('nome').style.borderColor = "red";
        document.getElementById('nome').style.borderColor = "red";
    } else {
        document.getElementById('nome').style.color = "green";
        document.getElementById('nome').style.borderColor = "green";
    }
});

document.getElementById('sobrenome').addEventListener('blur', element => {
    let sobrenome = element.target.value;

    if (sobrenome.length < 1) {
        alert("O sobrenome deve conter mais de 1 caracteres.", 'danger');
        document.getElementById('sobrenome').style.color = "red";
        document.getElementById('sobrenome').style.borderColor = "red";
    } else {
        document.getElementById('sobrenome').style.color = "green";
        document.getElementById('sobrenome').style.borderColor = "green";
    }
});

document.getElementById('rg').addEventListener('blur', element => {
    let rg = element.target.value;
    if (rg.length < 12) {
        alert("O rg deve conter 9 digitos.", 'danger');
        document.getElementById('rg').style.color = "red";
        document.getElementById('rg').style.borderColor = "red";
    } else {
        document.getElementById('rg').style.color = "green";
        document.getElementById('rg').style.borderColor = "green";
    }
});

document.getElementById('cpf').addEventListener('blur', element => {
    let rg = element.target.value;
    if (rg.length < 12) {
        alert("O cpf deve conter 11 digitos.", 'danger');
        document.getElementById('cpf').style.color = "red";
        document.getElementById('cpf').style.borderColor = "red";
    } else {
        document.getElementById('cpf').style.color = "green";
        document.getElementById('cpf').style.borderColor = "green";
    }
});

document.getElementById('cep').addEventListener('blur', element => {
    let cep = element.target.value;

    if (cep.length < 10) {
        alert("O cpf deve conter 8 digitos.", 'danger');
        document.getElementById('cep').style.color = "red";
        document.getElementById('cep').style.borderColor = "red";
    } else {
        document.getElementById('cep').style.color = "green";
        document.getElementById('cep').style.borderColor = "green";
    }
});

document.getElementById('telefone').addEventListener('blur', element => {
    let tel = element.target.value;
    if (tel.length < 15) {
        alert("O telefone deve conter 2 digitos do DDD e 9 digitos do número.", 'danger');
        document.getElementById('telefone').style.color = "red";
        document.getElementById('telefone').style.borderColor = "red";
    } else {
        document.getElementById('telefone').style.color = "green";
        document.getElementById('telefone').style.borderColor = "green";
    }
});

document.getElementById('cadastrar_form').addEventListener('click', element => {
    element.preventDefault();
    cadastrar();
});

document.getElementById('cadastrar_list').addEventListener('click', element => {
    element.preventDefault();
    mostraCadastro();
});

document.getElementById('fechaAlert').addEventListener('click', element => {
    closeAlert();
});

document.getElementById('header-home').addEventListener('click', element => {
    element.preventDefault();
    mostraIframe();
});

document.getElementById('header-cadastrar').addEventListener('click', element => {
    element.preventDefault();
    mostraCadastro();
});

document.getElementById('header-cadastrar').addEventListener('click', element => {
    element.preventDefault();
    mostraCadastro();
});

document.getElementById('header-lista').addEventListener('click', element => {
    element.preventDefault();
    mostraLista();
});

search.oninput = (evt) => {
    mostraLista();
    searchUser(evt);
};