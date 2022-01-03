5 - Dê um exemplo qualquer de callback function que seja diferente do material.


function Digaoi(string, callback) {
    console.log('Olá' + ' ' + string);
    callback();
}

function call() {
    console.log('callback function');
}

Digaoi('Fabio', call);