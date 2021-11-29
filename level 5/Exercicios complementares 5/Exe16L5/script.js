document.getElementById('input_mais').addEventListener('click', (evt) => {
    evt.preventDefault();
    console.log(parseInt(input_credito.value));
    if (parseInt(input_credito.value) < 5) {
        input_credito.value = parseInt(input_credito.value) + 1;
    } else {
        alert("Você chegou no limite maximo de credito por jogo");
    }
});
document.getElementById('input_menos').addEventListener('click', (evt) => {
    evt.preventDefault();
    console.log(parseInt(input_credito.value));
    if (parseInt(input_credito.value) > 0) {
        input_credito.value = parseInt(input_credito.value) - 1;
    } else {
        alert("Você não possui mais creditos");
    }
});