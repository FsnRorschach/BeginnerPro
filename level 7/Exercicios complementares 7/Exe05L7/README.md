5 - Como fazemos a chamada de uma função construtora criada? De um exemplo.

para fazer a chamada de uma função Construtora é necessarrio instanciar a Classe utilizando a palavra chave 'new'
Exemplo:

class Carro {
	marca;
	
	constructor(modelo) {
		this.modelo = modelo;
	}
}

let carro = new Carro("Vectra");