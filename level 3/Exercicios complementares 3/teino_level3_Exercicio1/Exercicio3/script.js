let imgUrl = document.getElementById('urlImg');

document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();

    var imgUrl1 = imgUrl.value.split('embed/');

    var imgLink = imgUrl.value.split('/');

    var youTube = imgLink.includes('www.youtube.com')

    const img = document.getElementById('cardImg');

    if (imgUrl.value != '' && youTube == true) {
        img.innerHTML = `
                            <iframe 
                                id="imgFig"
                                width="600px" 
                                height="400px" 
                                src="https://www.youtube.com/embed/${imgUrl1[1]}" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
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