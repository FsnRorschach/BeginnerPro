document.getElementById('enviar').addEventListener('click', (e) => {
    e.preventDefault();

    let str = document.querySelector('p').innerText;
    console.log(str);


    let invertida = str.split("").reverse().join("");

    console.log(invertida);

    card.innerHTML = `<p>Esse é a String "Gostamos de aprender" invertida :  ${invertida}.</p>`;
});