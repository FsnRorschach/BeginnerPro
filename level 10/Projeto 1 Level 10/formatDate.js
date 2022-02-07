// formata vizualização da data e hora
export function formatDate() {
    let data = new Date();
    let d = data.getDate();
    let m = formtMonth(data.getMonth());
    let a = data.getFullYear();
    let h = formtHora(data.getHours());
    let min = formtHora(data.getMinutes());
    let seg = formtHora(data.getSeconds());
    let dataAtual = d + "/" + m + "/" + a + "  " + h + ":" + min + "'" + seg;
    return dataAtual;
}

// formata o digitos da hora, minutos e segundos
let formtHora = (val) => {
    let format = val.toString();
    if (format.length == 1) {
        return "0" + format;
    } else {
        return format;
    }

};

let formtMonth = (val) => {
    val = val + 1;
    let format = val.toString();
    if (format.length == 1) {
        return "0" + format;
    } else {
        return format;
    }
};