let check = document.getElementById('btn1');
let imgCard = document.getElementById('cardImg');


check.onchange = () => {

    console.log(check.checked);

    if (check.checked == true) {
        imgCard.innerHTML = `
                                <img src="img/acesa.png" id="lampadaAcesa">
                            `;
        console.log("img apagada");
    } else {
        imgCard.innerHTML = `
                                <img src="img/apagada.png" id="lampadaApagada" >
                            `;
        console.log("img acesa");
    }
};