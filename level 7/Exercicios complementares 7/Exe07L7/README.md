7 - Explique o seguinte código:

class Paralelepipedo {
    constructor(largura, altura, comprimento){
        this.largura = largura;
        this.altura = altura;
        this.comprimento = comprimento;
    }

    get area(){
        return this.calculateArea();
    }

    calculateArea(){
        return this.altura * this.largura * this.comprimento;
    }
}

const block = new Paralalelepipedo(10, 20, 30);
console.log(block.area);

Foi declarada uma Classe de nome Paralelepipedo com um metodo contruto que recebe os parametros altura, largura e comprimento, um metodo get declarado como area que retorna uma função declarada calculateArea, que executa uma uma conta com base nos parametros recebidos pela Classe.
Ao ser instanciada com a palavra chave 'new' a classe é chamada pelo nome recebido e passado os valores, nesse momento os valores são tranferidos para os atributos declarados da classe , sendo referenciados com o this.
Estando instanciada na varivavel 'block', a função get é chamada somente pegando a variavel 'block', ponto, e o nome dado para o método, o caso area, dessa forma a função dentro do método area será executada chamando a outra função calculeteArea.