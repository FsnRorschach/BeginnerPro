programa
{
	inteiro num1, num2, num3
	funcao inicio()
	{
		escreva("Digite o número 1: ")
		leia(num1)

		escreva("Digite o número 2: ")
		leia(num2)

		escreva("Digite o número 3: ")
		leia(num3)

		se(num1 > num2 e num1 > num3){
			escreva("Esse é o Maior: " + num1)
		}

		se(num2 > num1 e num2 > num3){
			escreva("Esse é o Maior: " + num2)
		}

		se(num3 > num1 e num3 > num2){
			escreva("Esse é o Maior: " + num3)
		}


		se(num1 < num2 e num1 < num3){
			escreva("Esse é o Menor: " + num1)
		}

		se(num2 < num1 e num2 < num3){
			escreva("Esse é o Menor: " + num2)
		}

		se(num3 < num1 e num3 < num2){
			escreva("Esse é o Menor: " + num3)
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 492; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */