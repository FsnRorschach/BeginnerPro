programa
{
	inclua biblioteca Matematica-->mat
	real carCusto, carVenda, result, comissao
	
	funcao inicio()
	{
		escreva("Calculador de Lucros e Prejuizos do RaimundosCar's \n")

		escreva("Digite o preço de custo do carro : R$ " )
		leia(carCusto)

		escreva("Digite o preço de venda do carro : R$ " )
		leia(carVenda)

		comissao = carVenda * 0.03
		result = (carVenda - comissao) - carCusto

		se(result > 0){
			escreva("Parabéns o seu lucro foi de R$ " + mat.arredondar(result, 2) +"\n")
			escreva("A comissão a ser paga para o vendedor é de R$ " + mat.arredondar(comissao, 2) +"\n")
		}senao se(result == 0){
			escreva("Não houve lucro nessa venda, obteve R$ " + mat.arredondar(result, 2) +"\n")
			escreva("A comissão a ser paga para o vendedor é de R$ " + mat.arredondar(comissao, 2) +"\n")
		}senao se(result < 0){
			escreva("Essa venda gerou um prejuizo de R$ " + mat.arredondar(result, 2) +"\n")
			escreva("A comissão a ser paga para o vendedor é de R$ " + mat.arredondar(comissao, 2) +"\n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1011; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */