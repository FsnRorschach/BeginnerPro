document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();

    let nome1 = nome.value;
    let idade1 = idade.value;
    let profissao1 = profissao.value;
    let endereco1 = endereco.value;

    let card = document.getElementById('card');

    card.innerHTML = `
                        <label for="nomeOut">Nome:</label>
                        <p id="nomeOut">${nome1.toUpperCase()}</p>
                        <label for="idadeOut">Idade:</label>
                        <p id="idadeOut">${idade1}</p>
                        <label for="profissaoOut">Profissão:</label>
                        <p id="profissaoOut">${profissao1.length}</p>
                        <label for="enderecoOut">Endereço:</label>
                        <p id="enderecoOut">${endereco1.toLowerCase()}</p>
                    `;
    nome.value = '';
    nome.focus();
    idade.value = '';
    profissao.value = '';
    endereco.value = '';
});