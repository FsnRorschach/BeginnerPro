let arrayimg = [];
let conto = '';

let textconto = document.getElementById('ptextConto');

document.querySelector('button').addEventListener('click', evt => {
    evt.preventDefault();
    const nome = document.getElementById('nick').value;
    const personagem = document.getElementById('personagem').value;
    const monstros = document.getElementById('montros').value;
    const armas = document.getElementById('armas').value;
    const mapa = document.getElementById('mapa').value;
    const tragedia = document.getElementById('tragedia').value;
    const objHist = new historiaObj(nome, personagem, monstros, armas, mapa, tragedia);
    montaMapa(objHist);
    montaPersonagem(objHist);
    montaTragedia(objHist);
    montarArmas(objHist);
    mostraModal();
    montaBackground();
    maquinaEscrever();
});

class historiaObj {

    constructor(nome, personagem, monstros, armas, mapa, tragedia) {
        this.nome = nome;
        this.personagem = personagem;
        this.monstros = monstros;
        this.armas = armas;
        this.mapa = mapa;
        this.tragedia = tragedia;
    }

}

function montaMapa(obj) {
    switch (obj.mapa) {
        case "gelo":
            conto += `Era uma vez em uma terra distante de clima tropical, morava ${obj.nome} com sua familia feliz, `;
            break;
        case "refugio":
            conto += `Era uma vez em uma ilha distante da civilização, onde existia uma enorme montanha, morava ${obj.nome}, só, em sua jornada espiritual, `;
            break;
        case "fogo":
            conto += `Era uma vez no Deserto da Saara, junto ao seu povo viajava ${obj.nome} a procura de um local para descansar, `;
            break;
        case "cidade":
            conto += `Era uma vez na cidade mais populasa do Brasil, São Paulo, vivia ${obj.nome} com sua vida pacata e rotineira, `;
            break;
        default:
            break;
    }
}

function montaPersonagem(obj) {
    let date = new Date();

    switch (obj.personagem) {
        case "mago":
            conto += `ele era um aprendiz de ${obj.personagem}, que fazia truques para sobreviver, quando no ano de ${date.getFullYear()} aconteceu  `;
            break;
        case "tanker":
            conto += `ele era um aspirante a lutador de Box, treinava enquanto exercia a função de ${obj.personagem} no exército, quando no ano de ${date.getFullYear()} veio o chamado, `;
            break;
        case "princesa":
            conto += `a ${obj.personagem} vivia em seu mundo de conto de fadas, sempre alegre e disposta a ajudar, quando no ano de  ${obj.personagem} seu mundo desabou, `;
            break;
        case "guerreiro":
            conto += `o ávido ${obj.personagem} parecia apenas se importar com sua força e destreza, quando em meados do ano ${date.getFullYear()} aconteceu, `;
            break;
        default:
            break;
    }
}

function montaTragedia(obj) {
    switch (obj.tragedia) {
        case "temporal":
            conto += `uma Distorção ${obj.tragedia} rompeu a fina camada de frequência que mantinha os universos separados, dessa forma portais temporais começaram a abrir e se espalhar pela Terra e Universo, engolindo e trazendo humanos e outros seres de outras épocas e lugares, o pânico se instalou. Mas uma ponta de esperança surgiu de onde menos se esperava.`;
            arrayimg.push(`img/rupturaTemporal1.jpg`);
            arrayimg.push(`img/rupturaTemporal2.jpg`);
            arrayimg.push(`img/rupturaTemporal3.jpg`);
            arrayimg.push(`img/rupturaTemporal4.jpg`);
            arrayimg.push(`img/rupturaTemporal5.jpg`);
            break;
        case "desmagnetizacao":
            conto += `então aconteceu a ${obj.tragedia} polar devido ao começo de expedições lunares a lua não aguentou a intervenção terráquea na exploração de minerais e partiu e 3 pedaçõs, a terra começou a gradualmente perder o eixo de rotação, devido a isso saiu 3 graus da rotação solar, causando um descontrole de perca atmosferica, reduzindo a população de seres vivos para 15%. mas nem tudo estava perdido, os poucos sobreviventes encontraram uma forma de sobreviver com esperança de um futuro melhor.`;            
            arrayimg.push(`img/campo1.jpg`);
            arrayimg.push(`img/campo2.jpg`);
            arrayimg.push(`img/campo3.jpg`);
            arrayimg.push(`img/campo4.jpg`);
            arrayimg.push(`img/campo5.jpg`);
            arrayimg.push(`img/campo6.jpeg`);
            break;
        case "erupcaoSolar":
            conto += `o Planeta Mercúrio foi puxado pela gravidade do Sol, o impacto gerou força o suficiente para causar uma variação de matéria escura, os danos foram uma esplosão tão forte que causou uma ${obj.tragedia}, o dia ficou escaldante, não existe mais vegetação, o que restou de seres vivos, vivem no subterrâneo. Mas a humanidade havia se preparado para esse momento, nem tudo estava perdido.`;
            arrayimg.push(`img/terraDevastada1.jpg`);
            arrayimg.push(`img/terraDevastada2.jpeg`);
            arrayimg.push(`img/terraDevastada3.png`);
            arrayimg.push(`img/terraDevastada4.jpg`);
            arrayimg.push(`img/terraDevastada5.jpg`);
            arrayimg.push(`img/terraDevastada6.jpeg`);
            break;
        case "invasao":
            conto += `eles chegaram! Não deram a mínima chance de defesa, na ${obj.tragedia} fizeram a humanidade de escravo, tomaram o planeta, quem sobreviveu a Guerra e não foi capturado, vive isolado. Quando todos já nao tinham mais esperença eis que surge uma outra raça alien nos céus, um novo caminho começa para a humanidade e para ${obj.personagem}. `;
            arrayimg.push(`img/alien1.jpg`);
            arrayimg.push(`img/alien2.jpg`);
            arrayimg.push(`img/alien3.jpg`);
            arrayimg.push(`img/alien4.jpg`);
            arrayimg.push(`img/alien5.jpg`);
            arrayimg.push(`img/alien6.jpg`);
            break;
        default:
            break;
    }
}

function montarArmas(obj){
    switch (obj.armas) {
        case "faca":
            conto += `Com a notícia de esperança se espalhando pelo mundo, pegou sua ${obj.armas}, feita dos metais e pedras mais preciosas, considerada inquebrável, a procura de humanos para lutar e vencer.`;
            break;
        case "machado":
            conto += ` Ao ter a noticia de lutas pela sobrevivência, buscou seu ${obj.armas} forjado pelos anões anciões, partiu para a guerra em busca da liberdade.`;
            break;
        case "lanca":
            conto += `Depois de anos de treino e luta pela sobrevivência, segurou firme sua ${obj.armas}, apontanto diretamente para o inimigo que reluz no horizonte e começa sua marcha pelo destino da Humanidade.`;
            break;
        case "metralhadora":
            conto += `Com a morte de milhares de pessoas, recursos escassos, as únicas coisas que ainda resistem são os resquícios da guerra, ao chegar no forte um dos últimos refugios, encontrou uma ${obj.armas} de calibre .50mm, nomeada de retalhadora, e partiu para a luta onde sobreviver era a unica opção.`;
            break;
        default:
            break;
    }
}

function mostraModal(){
    document.querySelector('header').style.visibility = 'hidden';
    document.querySelector('main').style.visibility = 'hidden';
    document.getElementById('fundoModal').style.visibility = 'visible';
    document.getElementById('divtextConto').style.visibility = 'visible';
}

function maquinaEscrever(){

    let contoSplit = conto.split('');
    contoSplit.forEach((element, i) => {
        setTimeout(() => {
            textconto.innerHTML += element;
        }, 80 * i);

        setInterval(() => {
            montaBackground();
        },3000);
    });
}

function montaBackground(){
	var randomBack = Math.floor(Math.random() * arrayimg.length);
  if(randomBack == 0){
	    randomBack = 1;
	}
  document.body.style.backgroundImage = `url('${arrayimg[randomBack]}')`;
}