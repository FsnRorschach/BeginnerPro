let imgUrl = document.getElementById('urlImg');

document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();

    const img = document.getElementById('cardImg');

    if (imgUrl.value != '') {
        img.innerHTML = `
                            <img src="${imgUrl.value}" id="imgFig">
                        `;
        imgUrl.value = "";
        imgUrl.focus();
    } else {
        img.innerHTML = `
                            <p>Insira uma Url válida!</p>
                        `;
        imgUrl.value = "";
        imgUrl.focus();
    }

});