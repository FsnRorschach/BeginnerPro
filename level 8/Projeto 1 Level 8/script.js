let sectionList = document.getElementById('sectionlist');
let dataCard = '';

document.getElementById('searchOk').addEventListener('click', (evt) => {
    evt.preventDefault();
    console.log('entrou');
    let search = document.getElementById('search').value;
    console.log(search);
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
                console.log(dataCard);
                card(dataCard);
            })
            .catch(err => {
                console.error(err);
            });
    } catch (error) {
        console.log(error);
    }
});

let card = (data) => {

    for (let i = 0; i < data.length; i++) {
        console.log(i);
        console.log(data[i]);
        sectionList.innerHTML += `<div class="cardface_${i+1}">
                                    <div class="cardfront_${i+1}">
                                        <p>front</p>
                                    </div>
                                    <div class="cardback_${i+1}">
                                        <p>back</p>
                                        <h3>${data[i].title_short}</h3>
                                        <h4>${data[i].artist.name}</h4>
                                        <h3>${data[i].album.title}</h3>
                                        <div id="player_${i+1}">
                                            <a href="play"><span class="material-icons">
                                                    play_circle
                                                </span></a>
                                            <a href="pause"><span class="material-icons">
                                                    pause_circle
                                                </span></a>
                                            <a href="stop"><span class="material-icons">
                                                    stop_circle
                                                </span></a>
                                        </div>
                                    </div>
                                </div>
                                `;
        document.getElementsByClassName(`cardfront_${i+1}`).style.backgroundImage = `url(${data[i].album.cover})`;
    }

};