window.onload = function () {
    setInterval(relogio, 1000);
};

let relogio = () => {
    //instancia data
    let data = new Date();
    // pega hora, minuto, segundo
    let hour = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();
    // pega data
    let dia = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();
    console.log(dia);
    console.log(mes);
    console.log(ano);
    hour = (hour).toString();
    min = (min).toString();
    sec = (sec).toString();
    if (hour.length < 2) {
        hour = "0" + hour;
    }
    if (min.length < 2) {
        min = "0" + min;
    }
    if (sec.length < 2) {
        sec = "0" + sec;
    }
    let resdata = dia + "/" + (mes + 1) + "/" + ano;
    let resHora = hour + ":" + min + "'" + sec;
    console.log(resdata);
    console.log(resHora);
    document.getElementById('data').value = resdata;
    document.getElementById('relogio').value = resHora;
};