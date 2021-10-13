programa
{
	inclua biblioteca Matematica-->mat
	real conta
	inteiro dias
	funcao inicio()
	{
		escreva("Calculo de Juros \n")
		
		escreva("Digite o valor da conta R$ ")
		leia(conta)

		escreva("Digite a quantidade de dias em atraso ")
		leia(dias)

		/* Juros calculado com base no valor maximo permitido por lei de 1% ao mes */
		/* 1 % dividido por 30 dias = 0.033%*/

		conta += (0.033 * dias) * conta
		
		escreva("O valor total da conta com juros de " + dias + " dias é R$: " + mat.arredondar(conta, 2) + " \n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 459; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */