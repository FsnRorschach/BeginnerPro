document.getElementById('searchOk').addEventListener('click', (evt) => {
    evt.preventDefault();
    console.log('entrou');
    let search = document.getElementById('search').value;
    console.log(search);
    let url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + search;
    try {
        fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "616de02568mshb9b9216dad3e4d7p1cf755jsn35c498ca9900"
                }
            })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.error(err);
            });
    } catch (error) {
        console.log(error);
    }
});