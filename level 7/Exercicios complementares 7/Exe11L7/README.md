11 - Sobre setTimeout(), setInterval() e clearInterval(), descreva a funcionalidade de cada um deles. De exemplos com códigos de cada um deles.

SetTimeout() executa o que estiver dentro do seu escopo a partir do momento que é executado começa a contar o tempo definido na sua função, e executa apenas uma vez quando é chamado.

Exemplo: no meu site eu quero que seja mostrado um modal de anuncio 10 segundo depois que o usuario acessar o site:

setTimeout(()=>{
    mostrarModal();
}, 10000);

setInterval() executa o que estiver dentro do seu escopo com um intervalo de tempo, ou seja, a partir do momento que a função setInterval for executada pela primeira vez, será iniciado um contado com um valor de tempo definido que será executado o conteudo do seu escopa toda vez que o tempo definido for esgotado.

Exemplo: no meu site eu quero que a cor de fundo mude a cada 5 segundos:

setInterval( ()=>{
    random_bg_color();
})

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);
  
    document.body.style.background = bgColor;
}

clearInterval() é usado para limpar o parametro de tempo definido pelo SetTimeout() e setInterval(), sendo necessario passar o parametro de retorno para que seja executado.

Exemplo: na função mudar cor de fundo ao clicar no botão Pause, irá limpar o cronometro do setInterval().

<button onclick="paraCor()">Pause</button>

let rgb = setInterval( ()=>{
    random_bg_color();
})

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);
  
    document.body.style.background = bgColor;
}

let paraCor = ()=>{
    clearInterval(rgb);
}