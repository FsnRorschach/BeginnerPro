let groupcardSets = [];
let hearthtonecards = [];

let card_container = document.getElementById('container');

async function apiConsumerSets(set) {
    await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/${set}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
                "x-rapidapi-key": "616de02568mshb9b9216dad3e4d7p1cf755jsn35c498ca9900"
            }
        })
        .then(response => response.json())
        .then(card => {
            iterarCards(card);
        })
        .catch(err => {
            console.error(err);
        });
}

let iterarCards = (respcard) => {
    if (respcard['error'] == 404) {
        alert("Insira um nome válido!");
        document.getElementById('search').value = '';
        return;
    }
    groupcardSets = [];
    for (var key in respcard) {

        hearthtonecards = respcard[key];

        if (hearthtonecards.img !== null && hearthtonecards.img !== undefined) {
            let mechanic = "";
            if (hearthtonecards.mechanics) {
                for (let i = 0; i < hearthtonecards.mechanics.length; i++) {
                    if (i + 1 == 1) {
                        mechanic += hearthtonecards.mechanics[i].name;
                    } else if (i + 1 == 2) {
                        mechanic += " / " + hearthtonecards.mechanics[i].name;
                    }
                }
            }
            let objCard = {
                "card_img": hearthtonecards.img,
                "card_name": hearthtonecards.name ? hearthtonecards.name : "",
                "card_cardSet": hearthtonecards.cardSet ? hearthtonecards.cardSet : "",
                "card_cost": hearthtonecards.cost ? hearthtonecards.cost : "",
                "card_playerClass": hearthtonecards.playerClass ? hearthtonecards.playerClass : "",
                "card_text": hearthtonecards.text ? hearthtonecards.text : "",
                "card_race": hearthtonecards.race ? hearthtonecards.race : "",
                "card_mechanics": mechanic,
                "card_attack": hearthtonecards.attack ? hearthtonecards.attack : "",
                "card_health": hearthtonecards.health ? hearthtonecards.health : "",
                "card_type": hearthtonecards.type ? hearthtonecards.type : "",
                "card_flavor": hearthtonecards.flavor ? hearthtonecards.flavor : "",
                "card_artist": hearthtonecards.artist ? hearthtonecards.artist : ""
            };
            groupcardSets.push(objCard);
        }
    }
};

let setCard = (obj, index) => {
    card_container.innerHTML = '';
    card_container.innerHTML += `
                                    <div id="div_container_${index + 1}" class=" div_container w-[280px] mb-[20px]">
                                        <div id="div_img_${index + 1}" class="bg-[url('../img/background_card.jpg')] bg-no-repeat bg-cover div_img w-[260px] h-[375px] rounded-t-[15px]">
                                            <img src="${obj.card_img}" alt="${obj.card_name}" class="w-[270px]">
                                        </div>
                                        <div id="div_descrition_${index + 1}" class="div_descrition d-flex flex-column content-evenly bg-yellow-300 w-[260px] rounded-b-[15px] py-10">
                                            
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
    let aperitivo = "";
    let artista = "";

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (key == "card_name" && obj[key] != "") {
                nome = `<p  class="text-center font-mono"><b>${obj.card_name}</b></p>`;
                div_description.innerHTML += nome;
            }
            if (key == "card_cardSet" && obj[key] != "") {
                descricao = `<p  class="text-center font-mono"><b>Description: </b>${obj.card_cardSet}</p>`;
                div_description.innerHTML += descricao;
            }
            if (key == "card_cost" && obj[key] != "") {
                custo = `<p  class="text-center font-mono"><b>Cost: </b>${obj.card_cost}</p>`;
                div_description.innerHTML += custo;
            }
            if (key == "card_playerClass" && obj[key] != "") {
                classe = `<p  class="text-center font-mono"><b>Class: </b>${obj.card_playerClass}</p>`;
                div_description.innerHTML += classe;
            }
            if (key == "card_text" && obj[key] != "") {
                let txt = obj.card_text.replace('\n', '');
                descricao2 = `<p  class="text-center font-mono">${txt}</p>`;
                div_description.innerHTML += descricao2;
            }
            if (key == "card_race" && obj[key] != "") {
                raca = `<p  class="text-center font-mono"><b>Race: </b>${obj.card_race}</p>`;
                div_description.innerHTML += raca;
            }
            if (key == "card_mechanics" && obj[key] != "") {
                atificio = `<p  class="text-center font-mono"><b>Mechanics: </b>${obj.card_mechanics}</p>`;
                div_description.innerHTML += atificio;
            }
            if (key == "card_attack" && obj[key] != "") {
                ataque = `<p  class="text-center font-mono"><b>Attack: </b>${obj.card_attack}</p>`;
                div_description.innerHTML += ataque;
            }
            if (key == "card_health" && obj[key] != "") {
                vitalidade = `<p  class="text-center font-mono"><b>Health: </b>${obj.card_health}</p>`;
                div_description.innerHTML += vitalidade;
            }
            if (key == "card_type" && obj[key] != "") {
                tipo = `<p  class="text-center font-mono"><b>Type: </b>${obj.card_type}</p>`;
                div_description.innerHTML += tipo;
            }
            if (key == "card_flavor" && obj[key] != "") {
                aperitivo = `<p  class="text-center font-mono"><b>Type: </b>${obj.card_flavor}</p>`;
                div_description.innerHTML += aperitivo;
            }
            if (key == "card_artist" && obj[key] != "") {
                artista = `<p  class="text-center font-mono"><b>Type: </b>${obj.card_artist}</p>`;
                div_description.innerHTML += artista;
            }
        }
    }
};

function buscarCards() {
    let search = document.getElementById('search').value;
    if (search) {
        apiConsumerSets(search);
        setTimeout(() => {
            for (let j = 0; j < groupcardSets.length; j++) {
                setCard(groupcardSets[j], j);
            }
        }, 5000);
    } else {
        alert("Insira um nome valido!");
        return;
    }
}