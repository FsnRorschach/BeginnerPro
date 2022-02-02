let sectionList = document.getElementById('sectionlist');
let tableHist = document.getElementById('table');

let dataCard = '';
let playlist = [];
let objList = [];
let musicCurrent = 0;
let qtdMusic = 0;
let historico = JSON.parse(localStorage.getItem('myList')) || [];

window.onload = function () {
    console.log('Onload disparado');
    mylistHistoric(historico);
};

document.getElementById('searchOk').addEventListener('click', (evt) => {
    evt.preventDefault();
    console.log('entrou');
    document.getElementById('sectionHist').style.display = 'none';
    clearPlayer();
    let search = document.getElementById('search').value;
    if (!search) {
        alert("Insira um nome válido para consulta sua música!");
        document.getElementById('search').value = "";
    }
    let url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + search;
    try {
        fetch(url, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "616de02568mshb9b9216dad3e4d7p1cf755jsn35c498ca9900"
                }
            })
            .then(response => response.json())
            .then(resp => {
                console.log(resp);
                dataCard = resp.data;
                card(dataCard);
                $(function () {
                    // Definir playlist
                    for (let i = 0; i < dataCard.length; i++) {
                        playlist.push({
                            artist: dataCard[i].artist.name,
                            title: dataCard[i].album.title,
                            mp3: dataCard[i].preview
                        });
                    }
                    console.log(playlist);
                });
            })
            .catch(err => {
                console.error(err);
            });
    } catch (error) {
        console.log(error);
    }
});

let mylistHistoric = (array_obj) => {
    console.log(tableHist);
    tableHist.innerHTML = '';
    console.log(array_obj);

    if (array_obj.length > 0) {
        array_obj.forEach((element, index) => {
            tableHist.innerHTML += `
                                            <tr>
                                                <td id="imgAlbum"><img id="imgAlbum" src="${array_obj[index].img_album}" alt="${array_obj[index].artista}"></td>
                                                <td id="artista">${array_obj[index].artista}</td>
                                            </tr>
                                        `;
        });
    }

};

let card = (data) => {


    for (let i = 0; i < data.length; i++) {
        sectionList.innerHTML += `<div class="cardface" id="cardface_${i+1}">
                            <div class="cardfront" id="cardfront_${i+1}" style="background: url(${data[i].album.cover});" style="background-repeat: no-repeat" style="background-size: cover;">
                            </div>
                            <div class="cardback" id="cardback_${i+1}">
                                <h3>${data[i].title_short}</h3>
                                <h4>${data[i].artist.name}</h4>
                                <h3>${data[i].album.title}</h3>
                                <div id="player_${i+1}">
                                    <div id="card_play" onclick="playmusic(${i})">
                                        <span class="material-icons" id="card_span_play">
                                            play_circle
                                        </span></div>
                                </div>
                            </div>
                        </div>
                        `;

    }
    objList.push({
        'artista': data[0].artist.name,
        'img_album': data[0].album.cover
    });
    console.log(objList);
    localStorage.setItem('myList', JSON.stringify(objList));
};

function playmusic(track) {
    console.log(track);
    document.querySelector('footer').style.display = 'block';
    numTracks = playlist.length;
    musicCurrent = track;
    player.playCurrent();
}
/* player */

var player = $(".player").jPlayer({
    ready: function () {
        console.log('dentro do ready');
        // configura a faixa inicial do jPlayer
        player.jPlayer("setMedia", playlist[musicCurrent]);

        // reproduzir a faixa atual. Se não quiser que o player comece a tocar automaticamente
        // retirar esta linha
        // player.playCurrent();
    },
    ended: function () {
        console.log('dentro do ended');
        player.playNext();
    },
    play: function () {
        console.log('dentro do play');
        $('.player-current-track').text(playlist[musicCurrent]
            .artist + ' - ' + playlist[musicCurrent].title);
    },
    swfPath: "jplayer/jPlayer-2.9.2/jPlayer-2.9.2/dist/jplayer/jquery.jplayer.swf",
    supplied: "mp3",
    cssSelectorAncestor: "",
    cssSelector: {
        play: '.player-play',
        pause: ".player-pause",
        stop: ".player-stop",
        seekBar: ".player-timeline",
        playBar: ".player-timeline-control"
    },
    size: {
        width: "1px",
        height: "1px"
    }
});


player.playCurrent = function () {
    console.log('deu play');
    player.jPlayer("setMedia", playlist[musicCurrent]).jPlayer("play");
};

player.playNext = function () {
    musicCurrent = (musicCurrent == (qtdMusic - 1)) ? 0 : ++musicCurrent;
    player.playCurrent();
};

player.playPrevious = function () {
    musicCurrent = (musicCurrent == 0) ? qtdMusic - 1 : --musicCurrent;
    player.playCurrent();
};

$('.player-next').click(function () {
    player.playNext();
});

$('.player-prev').click(function () {
    player.playPrevious();
});

function clearPlayer() {
    sectionList.innerHTML = '';
    dataCard = '';
    playlist = [];
    musicCurrent = 0;
    qtdMusic = 0;
}