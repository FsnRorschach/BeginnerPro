programa
{
	inclua biblioteca Matematica-->mat
	cadeia produto
	real precoCusto, precoFinal
	funcao inicio()
	{
		escreva("Calculadora de Lucro de vendas \n")
		
		escreva("Digite o produto a ser vendido : ")
		leia(produto)

		escreva("Digite o preço de custo R$ ")
		leia(precoCusto)

		se(precoCusto < 0){
			escreva("Não é possivel calcular valor negativo, insira um valor acima de Zero \n")
		}senao se(precoCusto == 0){
			escreva("Não é possivel calcular com preço de custo zero, insira um valor acima de Zero \n")
		}senao se(precoCusto < 500){
			escreva("O preço para venda será R$ " + mat.arredondar(precoCusto * 1.50, 2) + " com lucro de R$ " + mat.arredondar(precoCusto * 0.50, 2) + "\n")
		}senao se(precoCusto >= 500){
			escreva("O preço para venda será R$ " + mat.arredondar(precoCusto * 1.25, 2) + " com lucro de R$ " + mat.arredondar(precoCusto * 0.25, 2) + "\n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 482; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */