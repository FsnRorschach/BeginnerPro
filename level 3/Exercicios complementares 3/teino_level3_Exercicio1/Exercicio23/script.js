document.getElementById('pegar').addEventListener('click', (e) => {
    e.preventDefault();

    let string = document.querySelector('p').textContent;

    console.log(string);
    let result = string.split("Eu");

    console.log(result);

    result = (result[1].trim());
    let result2 = result[0].toUpperCase() + result.substring(1);
    console.log(result2);

    card.innerHTML = `<p>Essa é uma parte da String:  ${result2}.</p>`;


});