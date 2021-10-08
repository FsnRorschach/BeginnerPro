programa
{
	inclua biblioteca Tipos --> type
	
	inteiro number1, number2, operation
	real result
	
	funcao inicio()
	{
		escreva("Calculadora \n")
		
		escreva("Digite o 1º numero: ")
		leia(number1)

		escreva("Digite o 2º numero: ")
		leia(number2)

		faca{
			escreva("Digite a operação a ser executada: 1 = Adição, 2 = Subtração , 3 = multiplicação , 4 = divisão. \n")
			leia(operation)
			
			se(operation == 1)
			{
				result = number1 + number2
			}
			senao se(operation == 2)
			{
				result = number1 - number2
			}
			senao se(operation == 3)
			{
				result = number1 * number2
			}
			senao se(operation == 4)
			{
				result = number1 / number2
			}
		}enquanto(operation < 1 ou operation > 4)
		
		
			
		escreva("O valor do calculo é: " + result)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 370; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */