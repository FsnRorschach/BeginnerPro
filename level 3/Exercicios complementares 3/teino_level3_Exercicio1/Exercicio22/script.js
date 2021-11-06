document.getElementById('pegar').addEventListener('click', (e) => {
    e.preventDefault();

    let string = document.querySelector('p').textContent;

    console.log(string);
    let result = string.split(" ");
    console.log(result);

    card.innerHTML = `<p>Essa é uma parte da String:  ${result[4]}.</p>`;


});