var msgvazia;
var post = [];

// escutador de eventos 'addEventListnner', aguardando o 'click' , atribuido ao button
document.querySelector('button').addEventListener('click', (e) => {
    // função que previne o reload da pagina no momento do submit do formulario
    e.preventDefault();
    // console.log("Entrou no clique do Postar");
    msgvazia = '';
    let urlP = url.value;
    let userP = usuario.value;
    let legendP = legenda.value;

    // console.log(urlP);
    // console.log(useroP);
    // console.log(legendP);

    validField(urlP, userP, legendP);

    // console.log(msgvazia);
    if (msgvazia != true) {

        const postObj = new Post(urlP, userP, legendP);

        console.log(postObj);
        post.unshift(postObj);
        console.log(post);
        postarFoto(postObj);
        document.querySelector('form').reset();
    }
});

function Post(url, user, legend) {
    this.url = url;
    this.user = user;
    this.legend = legend;
}

function validField(valueUrl, valueUser, valueLegend) {
    let msg = '';

    // console.log(valueUrl);
    // console.log(valueUser);
    // console.log(valueLegend);

    if (valueUrl == '' || valueUrl == null || valueUrl == undefined) {
        msg += "Campo 'URL' vazio, preencha com uma URL válida! \n";
    }
    if (valueUser == '' || valueUser == null || valueUser == undefined) {
        msg += "Campo 'Usuário' vazio, preencha para continuar! \n";
    }
    if (valueLegend == '' || valueLegend == null || valueLegend == undefined) {
        msg += "Campo 'Legenda' vazio, comente algo sobre a foto. \n";
    }

    // console.log(msg);
    if (msg != '') {
        msgvazia = true;
        return alert(msg);
    }
}

function postarFoto(post) {
    let feed = document.getElementById('feed');
    feed.innerHTML = '';

    post.forEach((e) => {
        console.log(e);
        feed.innerHTML += `
                            <div id="divFeed">
                                <h1>${post.url}</h1>
                                <figure id="figureFedd">
                                    <img src="${post.user}" id="imgFedd">
                                </figure>
                                <p>${post.legend}</p>
                            </div>
                        `;
    });
}