programa
{
	inteiro number1, number2, result
	
	funcao inicio()
	{
		escreva("Calculadora de Diferença \n")
		escreva("Digite o primeiro numero \n")
		leia(number1)

		escreva("Digite o segundo numero \n")
		leia(number2)

		se(number1 > number2){
			result = number1 - number2
			escreva("O valor " + number1 + " é o maior, a diferença entre " + number1 + " e " + number2 + " é " + result )
		}senao{
			result = number2 - number1
			escreva("O valor " + number2 + " é o maior, a diferença entre " + number2 + " e " + number1 + " é " + result )
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 400; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */