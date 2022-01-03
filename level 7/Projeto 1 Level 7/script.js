let arrayimg = [];
let conto = '';

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
    console.log(conto);
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
    console.log(obj);

    // "Era uma vez em lugar chamado Disney World havia lá um habitante que se chamava Otávio, ele era um golfinho muito alegre, até que foi chegada a era dos Zumbis, que foi causada em 2021 (iremos utilizar aqui date.getFullYear() para sempre retornar o ano que o usuário se encontra) por uma fissura nuclear que fazia com que os humanos pertos se tornassem Zumbis, criaturas sem qualquer tipo de consciência, suas únicas motivações eram comer golfinhos e dançar break. O golfinho se viu obrigado a aprender técnicas de combate aprimoradas, até que encontrou no Submundo de Disney World uma varinha mágica, ferramenta que ele utilizou por décadas no combate destes Zumbis, até que um dia aprendeu uma magia capaz de trazer os Zumbis de volta a sanidade mental, esses por sua vez não esqueceram como dançar break... Fim".

    switch (obj.mapa) {
        case "gelo":
            conto += `Era uma vez em uma terra distante de clima tropical, morava ${obj.nome} com sua familia feliz, `;
            break;
        case "refugio":
            conto += `Era uma vez em uma ilha distante da civilização, onde existia uma enorme montanha, morava ${obj.nome} , só em sua jornada espiritual, `;
            break;
        case "fogo":
            conto += `Era uma vez em no Deserto da Saara, junto ao seu povo viajava ${obj.nome} a procura de um local para descansar, `;
            break;
        case "cidade":
            conto += `Era uma vez em no cidade mais populasa do Brasil São Paulo, vivia ${obj.nome} com sua vida pacata e rotineira, `;
            break;
        default:
            break;
    }
}

function montaPersonagem(obj) {
    console.log(obj);
    let date = new Date();

    switch (obj.personagem) {
        case "mago":
            conto += `ele era um aprendiz de ${obj.personagem}, que fazia truques para sobreviver, quando no ano de ${date.getFullYear()} aconteceu  `;
            break;
        case "tanker":
            conto += `ele era um aspirante a lutador de Box, treinava enquanto exercia a função de ${obj.personagem} no exército, quando no ano de ${date.getFullYear()} veio o chamado `;
            break;
        case "princesa":
            conto += `a ${obj.personagem} vivia em seu mundo de conto de fadas, sempre alegre e disposta ajudar, quando no ano de  ${obj.personagem} seu mundo desabou, `;
            break;
        case "guerreiro":
            conto += `o ávido ${obj.personagem} parecia apenas se importar com sua força e destreza, quando em meados do ano ${date.getFullYear()} aconteceu`;
            break;
        default:
            break;
    }
}

function montaTragedia(obj) {
    console.log(obj);

    switch (obj.tragedia) {
        case "temporal":
            conto += `uma ${obj.tragedia} rompeu a fina camada de frequência que mantinha o universo separado por camadas, dessa forma portais temporais começaram a abrir e se espalhar pela Terra, engolindo e trazendo humanos e outros seres de outras épocas e lugares, o pânico se instalou.`;
            break;
        case "desmagnetizacao":
            conto += `${obj.tragedia} devido ao começo de expedições lunares a lua não aguentou a intervenção terraquea na exploração de minerais e partiu e 3 pedaçõs, a terra começou a gradualmente perder o eixo de rotação, devido a isso saiu 3 graus da rotação solar, causando um descontrole de perca atmosferica, reduzindo a população de seres vivos para 15%.`;
            break;
        case "erupcaoSolar":
            conto += `o Planeta Mercúrio foi puxado pela gravidade do Sol, o impacto gerou força o suficiente para causar uma variação de matéria escura, os danos foram uma esplosão tão forte que causou uma ${obj.tragedia}, o dia ficou escaldante, não existe mais vegetação, o que restou de seres vivos, vivem no subterrâneo.`;
            break;
        case "invasao":
            conto += `eles chegaram, não deram a minima chance de defesa, a ${obj.tragedia} fez a humanidade de escravo, tomaram o planeta, quem sobreviveu a Guerra e não foi capturado, vive isolado`;
            break;
        default:
            break;
    }
}