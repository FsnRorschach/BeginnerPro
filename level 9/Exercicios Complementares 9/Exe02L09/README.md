2 - Como funciona a TDZ? Dê um exemplo simples.

Zona Morta Temportal ou Temporal Dead Zone (TDZ), é quando uma variavél é declarada, mas o seu uso é feito antes dessa declaração isso salvo algumas particularidades, quando é declarada com var ou seja Global, mesmo sendo executada antes, ainda será compilada como undefined, caso seja declarada com let ou seja variavel que seguirá o escopo declarado, nesse caso se a compilação ocorrer antes da declaração da varivel será disparado o erro "Uncaught ReferenceError: Cannot access 'nome' before initialization", isso acontece pois o let não aceita valor undefined, como sabemos const não pode mudar valor e assim como let só compila dentro do escopo.

Exemplo:

function minhaFuncao() {
	console.log(nome);
	let nome = 'Faculdade iv2';
}

minhaFuncao();

nesse caso ocorre o erro "Uncaught ReferenceError: Cannot access 'nome' before initialization"