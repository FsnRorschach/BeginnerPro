programa
{
	real number1, number2, number3, number4, result
	
	funcao inicio()
	{
		escreva("Calculadora \n")
		escreva("Vamos tirar a media \n")

		escreva("Digite o primeiro numero: ")
		leia(number1)

		escreva("Digite o segundo numero: ")
		leia(number2)

		escreva("Digite o terceiro numero: ")
		leia(number3)

		escreva("Digite o quarto numero: ")
		leia(number4)

		result = (number1 + number2 + number3 + number4)/4 

		se(result < 5)
		{
			escreva("Resultado da media é: " + result + ", você foi reprovado, até o proxima tentativa")
		}senao
		{
			escreva("Resultado da media é: " + result + ", parabéns você foi aprovado, orgulho do papai")
		}

		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 664; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */