let arrayform;
// função escutadora de evento de click no botao do formulario
document.querySelector('button').addEventListener('click', (evt) => {
    // função que previne o reload no submit do botão
    evt.preventDefault();
    //setando valores pegos dos campos do formulario e setando em variaveis
    let nomeField = nome.value;
    let idadeField = idade.value;
    let profissaoField = profissao.value;

    console.log(nomeField);
    console.log(idadeField);
    console.log(profissaoField);
    // criando um objeto para passar como parametro na função de criar template
    arrayform = new arrayFormObj(nomeField, idadeField, profissaoField);

    console.log(arrayform);
    //função que cria a template é passado o objeto criado como parâmetro
    cardTemplate(arrayform);
    // limpar formulario
    document.querySelector('form').reset();
    // setar o focu do cursor no campo nome
    nome.focus();
});
// template a ser inserida no DOM
let cardTemplate = (val) => {
    console.log(val);
    console.log(val.nomeField);
    const divCard = document.getElementById('cardtemplate');
    const sectionCard = document.getElementById('sectionCard');
    sectionCard.style.display = "block";
    divCard.innerHTML = `
                            <h1>Dados:</h1>
                            <p id="nomeDados">Nome: ${val.fieldName}</p>
                            <p id="idadeDados">Idade: ${val.fieldIdade}</p>
                            <p id="profissaoDados">Profissão: ${val.fieldprofissao}</p>
                        `;
};
// função construtora
function arrayFormObj(nome, idade, profissao) {
    this.fieldName = nome;
    this.fieldIdade = idade;
    this.fieldprofissao = profissao;
}