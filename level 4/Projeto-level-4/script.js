let check = document.getElementById('btn1');
let form = document.querySelector('form');
let salvar = document.getElementById('salvar');
let divTable = document.getElementById('table_div');
let table = document.querySelector('tbody');

let arrayFormObj;
let arrayUsers = [];

salvar.addEventListener('click', (evt) => {
    evt.preventDefault();
    console.log("Entrou no salvar");
    let formName = form.nome.value;
    let formMail = form.mail.value;
    let formPhone = form.phone.value;
    let formMaritalState = form.state.value;
    let formSchool = form.escolaridade.value;
    let formPost = form.cep.value;
    let formStreet = form.rua.value;
    let formNumber = form.numero.value;
    let formDistrict = form.bairro.value;
    let formCity = form.cidade.value;
    let formState = form.estado.value;
    let formComplet = form.complemento.value;

    arrayFormObj = {
        "Nome": formName,
        "E-mail": formMail,
        "telefone": formPhone,
        "Estado Conjugal": formMaritalState,
        "Escolaridade": formSchool,
        "CEP": formPost,
        "Rua": formStreet,
        "Numero": formNumber,
        "Bairro": formDistrict,
        "Cidade": formCity,
        "Estado": formState,
        "Complemento": formComplet
    };

    console.log(arrayFormObj);
    let validReturn = validfields(arrayFormObj);
    console.log(validReturn);

    if (validReturn == false) {
        return;
    }

    let usuario = new Usuario(
        arrayFormObj["Nome"],
        arrayFormObj["E-mail"],
        arrayFormObj["telefone"],
        arrayFormObj["Estado Conjugal"],
        arrayFormObj["Escolaridade"],
        arrayFormObj["CEP"],
        arrayFormObj["Rua"],
        arrayFormObj["Numero"],
        arrayFormObj["Bairro"],
        arrayFormObj["Cidade"],
        arrayFormObj["Estado"],
        arrayFormObj["Complemento"]
    );

    arrayUsers.push(usuario);

    console.log(arrayUsers);
    arrayFormObj = '';
    form.reset();
    tableTemplate();
});

// valida campos vazios
let validfields = (objFields) => {
    let msg = "";
    console.log(objFields);
    Object.keys(objFields).forEach((key) => {
        console.log(key);
        console.log(objFields[key]);
        if (!objFields[key] && [key] != "Complemento") {
            msg += "Campo " + [key] + " vazio, preencha para continuar.\n";
        }
    });

    if (msg != "") {
        alert(msg);
        return false;
    }
};

// botao limpar inputs
document.getElementById('limpar').addEventListener('click', (evt) => {
    evt.preventDefault();
    form.reset();
});

check.onchange = () => {

    console.log(check.checked);

    if (check.checked == true) {
        console.log("checked true");
        document.getElementById('complemento').style.display = "block";
    } else {
        console.log("checke false");
        document.getElementById('complemento').style.display = "none";
        document.getElementById('complemento').value = '';
    }
};

let date = () => {
    const date = new Date();
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
};

function Usuario(nome, mail, telefone, conjugal, escolaridade, cep, rua, numero, bairro, cidade, estado, complemento) {
    this.nome = nome;
    this.mail = mail;
    this.telefone = telefone;
    this.conjugal = conjugal;
    this.escolaridade = escolaridade;
    this.cep = cep;
    this.rua = rua;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.complemento = complemento;
    this.data = date();
}

let tableTemplate = () => {
    console.log(arrayUsers);
    divTable.style.display = 'block';
    table.innerHTML = "";
    for (let j = 0; j < arrayUsers.length; j++) {
        console.log(arrayUsers[j]);

        table.innerHTML += `
                            <tr>
                                <td><input type="text" value="${arrayUsers[j].data}"></td>
                                <td><input type="text" value="${arrayUsers[j].nome}"></td>
                                <td><input type="text" value="${arrayUsers[j].mail}"></td>
                                <td><input type="text" value="${arrayUsers[j].telefone}"></td>
                                <td><input type="text" value="${arrayUsers[j].conjugal}"></td>
                                <td><input type="text" value="${arrayUsers[j].escolaridade}"></td>
                                <td><input type="text" value="${arrayUsers[j].cep}"></td>
                                <td><input type="text" value="${arrayUsers[j].rua}"></td>
                                <td><input type="text" value="${arrayUsers[j].numero}"></td>
                                <td><input type="text" value="${arrayUsers[j].complemento}"></td>
                                <td><input type="text" value="${arrayUsers[j].bairro}"></td>
                                <td><input type="text" value="${arrayUsers[j].cidade}"></td>
                                <td><input type="text" value="${arrayUsers[j].estado}"></td>
                                <td><span class="material-icons" id="lixeira" onclick="deletalinha(${j})">
                                delete
                                </span></td>
                            </tr>
                            `;
    }
};

// percorrer e pegar alinha da tabela
let deletalinha = (index) => {
    arrayUsers.splice(index, 1);
    tableTemplate();
};