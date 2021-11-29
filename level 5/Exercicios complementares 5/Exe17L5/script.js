window.onload = function () {
    atualizaTemplate();
};
// declaração de array para enviar para o localStorage
let textoLocalStorage = JSON.parse(localStorage.getItem('texto')) || [];
let divTemplate = document.getElementById('template_div');

// função escutadora do click no botão salvar
document.getElementById('salvar').addEventListener('click', (evt) => {
    evt.preventDefault();
    criarArray(input_texto.value);
    atualizaTemplate();
});
// função para criar o array
let criarArray = (val) => {
    console.log(val);
    let localObj = new criarObj(val);
    console.log(localObj);
    textoLocalStorage.push(localObj);
    console.log(textoLocalStorage);
    salvarStorage();
};
// função construtora do objeto - é um item apenas, mas é para treino
function criarObj(val) {
    this.text_input = val;
}
//função de salvar no localStorage
let salvarStorage = () => {
    localStorage.setItem('texto', JSON.stringify(textoLocalStorage));
};
//função de setar template no html
let atualizaTemplate = () => {
    divTemplate.innerHTML = '';
    console.log(textoLocalStorage);
    if (textoLocalStorage) {
        divTemplate.style.display = 'block';
        textoLocalStorage.forEach((el, index) => {
            divTemplate.innerHTML += `
                                <ul>
                                    <li><h4>${el.text_input}</h4></li>
                                    <li>
                                        <span class="material-icons" id="lixeira" onclick="deletaLinha(${index})">
                                            delete_outline
                                        </span>
                                    </li>
                                </ul>
                            `;
        });
    }
    input_texto.value = "";
    input_texto.focus();
};
// limpa o localStorage
function limparStorage() {
    divTemplate.style.display = 'none';
    textoLocalStorage = [];
    localStorage.clear();
    atualizaTemplate();
}
//apagar linha
function deletaLinha(value) {
    textoLocalStorage.splice(value, 1);
    if (textoLocalStorage.length > 0) {
        salvarStorage(textoLocalStorage);
        atualizaTemplate();
    } else {
        limparStorage()
    }
}