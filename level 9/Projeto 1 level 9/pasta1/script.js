let hearthtonecards = [];
let groupcards = [];


let card_container = document.getElementById('container');

window.onload = function () {
    console.log('Onload disparado');
    apiConsumer();
};

async function apiConsumer() {
    await fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
                "x-rapidapi-key": "616de02568mshb9b9216dad3e4d7p1cf755jsn35c498ca9900"
            }
        })
        .then(response => response.json())
        .then(card => {
            iterarCards(card);
            loadingInitialClose();
        })
        .catch(err => {
            console.error(err);
        });
}


let loadingInitialClose = () => {
    document.getElementById('sec_loading').style.display = "none";
    document.getElementById('sec_logo').style.display = "block";
    document.getElementById('iniciar').style.display = "block";
};

let loadingSetCard = () => {
    document.getElementById('sec_loading').style.display = "block";
    document.getElementById('sec_logo').style.display = "block";
    document.getElementById('iniciar').style.display = "block";
};


let iterarCards = (respcard) => {
    groupcards = [];
    for (var key in respcard) {
        if (Object.prototype.hasOwnProperty.call(respcard, key)) {
            hearthtonecards = respcard[key];
            hearthtonecards.forEach(card => {
                if (card.img !== null && card.img !== undefined) {
                    let mechanic = "";
                    if (card.mechanics) {
                        for (let i = 0; i < card.mechanics.length; i++) {
                            if (i + 1 == 1) {
                                mechanic += card.mechanics[i].name;
                            } else if (i + 1 == 2) {
                                mechanic += " / " + card.mechanics[i].name;
                            }
                        }
                    }

                    let objCard = {
                        "card_img": card.img,
                        "card_name": card.name ? card.name : "",
                        "card_cardSet": card.cardSet ? card.cardSet : "",
                        "card_cost": card.cost ? card.cost : "",
                        "card_playerClass": card.playerClass ? card.playerClass : "",
                        "card_text": card.text ? card.text : "",
                        "card_race": card.race ? card.race : "",
                        "card_mechanics": mechanic,
                        "card_attack": card.attack ? card.attack : "",
                        "card_health": card.health ? card.health : "",
                        "card_type": card.type ? card.type : ""
                    };

                    groupcards.push(objCard);

                }
            });
        }
    }
};

let setCard = (obj, index) => {
    card_container.innerHTML = '';
    card_container.innerHTML += `
                                    <div id="div_container_${index + 1}" class="div_container">
                                        <div id="div_img_${index + 1}" class="div_img">
                                            <img src="${obj.card_img}" alt="${obj.card_name}">
                                        </div>
                                        <div id="div_descrition_${index + 1}" class="div_descrition d-flex flex-column">
                                            
                                        </div>
                                    </div>
                                `;
    setDescritionCard(obj, index);
};

let setDescritionCard = (obj, index) => {
    let div_description = document.getElementById(`div_descrition_${index + 1}`);
    let nome = "";
    let descricao = "";
    let custo = "";
    let classe = "";
    let descricao2 = "";
    let raca = "";
    let atificio = "";
    let ataque = "";
    let vitalidade = "";
    let tipo = "";

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (key == "card_name" && obj[key] != "") {
                nome = `<p  class="text-center font_descrition"><b>${obj.card_name}</b></p>`;
                div_description.innerHTML += nome;
            }
            if (key == "card_cardSet" && obj[key] != "") {
                descricao = `<p  class="text-center font_descrition"><b>Description: </b>${obj.card_cardSet}</p>`;
                div_description.innerHTML += descricao;
            }
            if (key == "card_cost" && obj[key] != "") {
                custo = `<p  class="text-center font_descrition"><b>Cost: </b>${obj.card_cost}</p>`;
                div_description.innerHTML += custo;
            }
            if (key == "card_playerClass" && obj[key] != "") {
                classe = `<p  class="text-center font_descrition"><b>Class: </b>${obj.card_playerClass}</p>`;
                div_description.innerHTML += classe;
            }
            if (key == "card_text" && obj[key] != "") {
                descricao2 = `<p  class="text-center font_descrition">${obj.card_text}</p>`;
                div_description.innerHTML += descricao2;
            }
            if (key == "card_race" && obj[key] != "") {
                raca = `<p  class="text-center font_descrition"><b>Race: </b>${obj.card_race}</p>`;
                div_description.innerHTML += raca;
            }
            if (key == "card_mechanics" && obj[key] != "") {
                atificio = `<p  class="text-center font_descrition"><b>Mechanics: </b>${obj.card_mechanics}</p>`;
                div_description.innerHTML += atificio;
            }
            if (key == "card_attack" && obj[key] != "") {
                ataque = `<p  class="text-center font_descrition"><b>Attack: </b>${obj.card_attack}</p>`;
                div_description.innerHTML += ataque;
            }
            if (key == "card_health" && obj[key] != "") {
                vitalidade = `<p  class="text-center font_descrition"><b>Health: </b>${obj.card_health}</p>`;
                div_description.innerHTML += vitalidade;
            }
            if (key == "card_type" && obj[key] != "") {
                tipo = `<p  class="text-center font_descrition"><b>Type: </b>${obj.card_type}</p>`;
                div_description.innerHTML += tipo;
            }
        }
    }
};

document.getElementById('iniciar').addEventListener('click', () => {

    let maximo = groupcards.length;
    let j;
    let arr = [];
    let reduzArray = [];
    let p;
    let n;
    let tmp;

    // guarda o numero maximo em um array
    for (j = 0; j < maximo; j++) {
        arr[j] = j + 1;
    }
    //embaralha os numeros
    for (p = arr.length; p;) {
        n = Math.random() * p-- | 0;
        tmp = arr[n];
        arr[n] = arr[p];
        arr[p] = tmp;
    }

    for (let o = 0; o < 400; o++) {
        reduzArray[o] = arr[o];
    }

    reduzArray.sort(function ordernum(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });

    for (i = 0; i < reduzArray.length; i++) {
        setCard(groupcards[reduzArray[i]], i);
    }

});