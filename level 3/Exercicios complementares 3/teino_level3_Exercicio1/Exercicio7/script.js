document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();

    let nota_1 = nota1.value;
    let nota_2 = nota2.value;
    console.log(typeof (nota_1));
    console.log(typeof (nota_2));
    let result = (parseInt(nota_1) + parseInt(nota_2)) / 2;
    console.log(result);
    let card1 = document.getElementById('card');


    if (result >= 6) {
        card1.innerHTML = `<p>Parabéns você foi aprovado, sua média é ${result}</p>`;
        nota1.value = "";
        nota2.value = "";
    } else {
        card1.innerHTML = `<p>Você reprovou, tente de novo, sua média é ${result}</p>`;
        nota1.value = "";
        nota2.value = "";
    }

});