document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Nome: " + nome.value);
    console.log("Idade: " + idade.value);
    console.log("Profissão: " + profissao.value);
});