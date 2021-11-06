let btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let nome = window.prompt("Digite seu nome:");
    if (nome == "" || nome == null || nome == undefined) {
        nome = ", digite seu nome";
    }
    alert("Olá " + nome + "!");
});