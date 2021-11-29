let userArrayLogin = JSON.parse(localStorage.getItem('cadastro')) || [];
let formEl = document.querySelector('form');
// function para escutar o click do button entrar
document.getElementById('send').addEventListener('click', (evt) => {
    evt.preventDefault();
    const user = user_login.value;
    const pass = user_pass.value;
    const sendLogin = new UserLogin(user.trim(), pass.trim());
    let validReturn = validfields(sendLogin);
    if (validReturn == false) {
        return;
    }
    loginReturn(login(sendLogin));
});

let loginReturn = (ret) => {
    if (ret == 'loginOff') {
        return;
    } else if (ret == 'loginSuccess') {
        formEl.reset();
    } else if (ret == 'loginPassOff') {
        formEl.user_pass.value = '';
    }
};

document.getElementById('register').addEventListener('click', (evt) => {
    evt.preventDefault();
    const user = user_login.value;
    const pass = user_pass.value;
    const registerLogin = new UserLogin(user.trim(), pass.trim());
    let validReturn = validfields(registerLogin);
    if (validReturn == false) {
        return;
    }
    sendReturn(saveStorage(registerLogin));
});

let sendReturn = (ret) => {
    console.log(ret);
    if (ret == true) {
        formEl.reset();
    }
};

function UserLogin(user, pass) {
    this.user = user;
    this.pass = pass;
}

// função verifica campo vazio
let validfields = (objFields) => {
    let msg = "";
    let type;
    console.log(objFields);
    Object.keys(objFields).forEach((key) => {
        // verifica campo vazio
        if (!objFields[key]) {
            if (key == 'user') {
                msg += "Campo usuário vazio, preencha para continuar.\n";
            }
            if (key == 'pass') {
                msg += "Campo senha vazio, preencha para continuar.\n";
            }

        } else {
            // verifica se o email é no formato valido
            if (key == 'user') {
                if (objFields[key].indexOf('@') == -1 ||
                    objFields[key].indexOf('.') == -1) {
                    msg += "Por favor, informe um E-MAIL válido!\n";
                }
            }
            if (key == 'pass') {
                if (objFields[key].length < 4 || objFields[key].length > 8) {
                    msg += "A senha precisar ter mais do que 4 e menos que 8 caracteres\n";
                }
            }
        }

    });

    if (msg != "") {
        type = 'default';
        templateMsg(msg, type);
        return false;
    }
};
//função de criar a template que será renderizada na mensagem de sucesso ou falha
let templateMsg = (msg, type) => {
    let sectModal = document.getElementById('sec_mod_msg');
    let divModal = document.getElementById('div_mod_msg');

    let sectModalback = document.getElementById('sec_mod');
    sectModal.style.visibility = "visible";
    sectModalback.style.visibility = "visible";
    divModal.innerHTML = `
                                <p id="msg">${msg}</p>
                                
                            `;
    let pMsg = document.getElementById('msg');
    switch (type) {
        case 'success':
            sectModal.style.backgroundColor = "rgb(92, 255, 154)";
            divModal.style.backgroundColor = "rgba(151, 252, 189, 0.5)";
            pMsg.style.color = "#ffffff";
            break;
        case 'failure':
            sectModal.style.backgroundColor = "rgb(255, 252, 90)";
            divModal.style.backgroundColor = "rgba(255, 254, 168, 0.5)";
            pMsg.style.color = "#000000";
            break;

        case 'failure_mail':
            sectModal.style.backgroundColor = "rgb(255, 86, 86)";
            divModal.style.backgroundColor = " rgba(255, 135, 135, 0.5)";
            pMsg.style.color = "#ffffff";
            break;
        case 'failure_senha':
            sectModal.style.backgroundColor = "rgb(255, 135, 66)";
            divModal.style.backgroundColor = "rgba(255, 182, 141, 0.5)";
            pMsg.style.color = "#ffffff";
            break;
        case 'default':
            sectModal.style.background = "rgb(70, 113, 255)";
            divModal.style.background = "rgba(135, 163, 255, 0.5)";
            pMsg.style.color = "#ffffff";
            break;

        default:
            sectModal.style.backgroundColor = "rgb(70, 113, 255)";
            divModal.style.backgroundColor = "rgba(135, 163, 255, 0.5)";
            pMsg.style.color = "#ffffff";
            break;
    }
    setTimeout(() => {
        sectModalback.style.visibility = 'hidden';
        sectModal.style.visibility = 'hidden';
    }, 5000);

};

//função de salvar no localStorage
let saveStorage = (user) => {
    let msg = "";
    let type;
    if (userArrayLogin.length == 0) {
        userArrayLogin.push(user);
        localStorage.setItem('cadastro', JSON.stringify(userArrayLogin));
        msg = "Cadastro efetuado com sucesso.\n";
        type = 'success';
    } else {
        for (let i = 0; i < userArrayLogin.length; i++) {
            if (userArrayLogin[i]['user'] === user['user']) {
                msg += "Usuario já existe!.\n";
                type = 'failure_mail';
                if (msg != "") {
                    templateMsg(msg, type);
                    return true;
                }
            }
        }

        userArrayLogin.push(user);
        localStorage.setItem('cadastro', JSON.stringify(userArrayLogin));
        msg = "Cadastro efetuado com sucesso.\n";
        type = 'success';
    }
    if (msg != "") {
        templateMsg(msg, type);
        return true;
    }
};

// função de fazer o login
let login = (user) => {
    let msg = "";
    let type;
    console.log(user);
    console.log(userArrayLogin);
    if (userArrayLogin.length == 0) {
        msg = "Usuário não cadastrado, clique em cadastrar.\n";
        type = 'failure';
        if (msg != "") {
            templateMsg(msg, type);
            return 'loginOff';
        }
    } else {
        for (let i = 0; i < userArrayLogin.length; i++) {
            if (userArrayLogin[i]['user'] === user['user']) {
                if (userArrayLogin[i]['pass'] === user['pass']) {
                    msg += "Login efetuado com sucesso!.\n";
                    type = 'success';
                    if (msg != "") {
                        templateMsg(msg, type);
                        return 'loginSuccess';
                    }
                } else {
                    msg += `Senha incorreta! Tente outra vez.\n`;
                    type = 'failure';
                    if (msg != "") {
                        templateMsg(msg, type);
                        return 'loginPassOff';
                    }
                }
            }
        }
        msg = "Usuário não cadastrado, clique em cadastrar.\n";
        type = 'failure';
        if (msg != "") {
            templateMsg(msg, type);
            return 'loginOff';
        }
    }
};