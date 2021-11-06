document.getElementById('salvar').addEventListener('click', (e) => {
    e.preventDefault();

    let nome1 = nome.value;
    let idade1 = idade.value;
    let profissao1 = profissao.value;
    let gostos1 = gostos.value;

    console.log(nome1);
    console.log(idade1);
    console.log(profissao1);
    console.log(gostos1);

    // expressaõ regular que remove espaços e virgulas
    gostos1 = gostos1.split(/[ ,]+/);

    console.log(gostos1);

    let pessoa = {
        nome: nome1,
        idade: idade1,
        profissao: profissao1,
        gostos: gostos1
    };

    console.log(pessoa);

    card.innerHTML = `<p>Meu nome é ${pessoa.nome}, minha idade é ${pessoa.idade}, minha profissão é ${pessoa.profissao} e meus Gostos são </p>`;
    for (let i = 0; i < pessoa.gostos.length; i++) {
        card.innerHTML += `<p> ${pessoa.gostos[i] }</p>`;
    }

});