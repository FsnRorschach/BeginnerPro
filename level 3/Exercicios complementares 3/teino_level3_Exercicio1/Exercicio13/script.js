document.getElementById('calcula').addEventListener('click', (e) => {
    e.preventDefault();

    let raio = valor1.value;
    let area = 3.14 * (raio * raio);

    card.innerHTML = `<p>A área do circulo é:  ${area}</p>`;
});