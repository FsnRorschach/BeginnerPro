programa
{
	inclua biblioteca Matematica-->mat
	inteiro cent5, cent10, cent25, cent50, real1
	real result = 0.00
	
	funcao inicio()
	{
		escreva("Calculadora de cofrinho \n")
		
		escreva("Digite a quantidade de moedas de R$ 0.05  \n")
		leia(cent5)
		result += mat.arredondar(cent5 * 0.05, 2)
		escreva("Total de moedas de R$ 0.05 centavos : R$ " + mat.arredondar(cent5 * 0.05, 2) + "\n")
		escreva("O total de dinheiro no cofrinho é : R$ " + result + "\n")
		
		escreva("Digite a quantidade de moedas de R$ 0.10  \n")
		leia(cent10)
		result += mat.arredondar(cent10 * 0.10, 2)
		escreva("Total de moedas de R$ 0.10 centavos : R$ " + mat.arredondar(cent10 * 0.10, 2) + "\n")
		escreva("O total de dinheiro no cofrinho é : R$ " + result + "\n")

		escreva("Digite a quantidade de moedas de R$ 0.25  \n")
		leia(cent25)
		result += mat.arredondar(cent25 * 0.25, 2)
		escreva("Total de moedas de R$ 0.25 centavos : R$ " + mat.arredondar(cent25 * 0.25, 2) + "\n")
		escreva("O total de dinheiro no cofrinho é : R$ " + result + "\n")

		escreva("Digite a quantidade de moedas de R$ 0.50  \n")
		leia(cent50)
		result += mat.arredondar(cent50 * 0.05, 2)
		escreva("Total de moedas de R$ 0.50 centavos : R$ " + mat.arredondar(cent50 * 0.50, 2) + "\n")
		escreva("O total de dinheiro no cofrinho é : R$ " + result + "\n")

		escreva("Digite a quantidade de moedas de R$ 1.00  \n")
		leia(real1)
		result += mat.arredondar(real1 * 1.00, 2)
		escreva("Total de moedas de R$ 1.00 Real: R$ " + mat.arredondar(real1 * 1.00, 2) + "\n")

		escreva("O total de dinheiro no cofrinho é : R$ " + result + "\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1592; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */