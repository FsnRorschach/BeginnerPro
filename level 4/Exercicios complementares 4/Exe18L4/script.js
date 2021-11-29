let pessoas = [];
let verificaID;

document.getElementById('salvar').addEventListener('click', (evt) => {
    evt.preventDefault();


    let nomeform = nome.value;
    let idadeform = idade.value;
    let id;
    if (pessoas == "") {
        id = Math.floor(Math.random() * 100000);
        console.log(id);
    } else {
        do {
            verificaID = "";
            id = Math.floor(Math.random() * 100000);
            verificaID = pessoas.find(valID => valID.id == id);
            console.log(verificaID);
        } while (verificaID == "");

    }

    console.log(nomeform);
    console.log(idadeform);
    console.log(id);

    pessoas.push(new Pessoas(id, nomeform, idadeform));

    console.log(pessoas);
    document.querySelector('form').reset();
});

document.getElementById('limpar').addEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('form').reset();
});

function Pessoas(id, nome, idade) {
    this.cadId = id;
    this.cadnome = nome;
    this.cadidade = idade;
}