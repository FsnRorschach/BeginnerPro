programa
{
	real altura, result
	inteiro genero
	
	funcao inicio()
	{
		
		faca{
			escreva("\nBem Vindo Calculadora IMC de Gênero \n")
			
			escreva("Digite ( 1 ) Masculino - ( 2 ) Feminino - ou ( 3 ) Sair\n")
			leia(genero)
			
			escreva("Digite a sua altura \n")
			leia(altura)

			se(genero == 1){
				result = (72.7 * altura) - 58
				escreva("O seu peso ideal é : " + result)
			}
			senao se(genero == 2){
				result = (62.1 * altura) - 44.7
				escreva("O seu peso ideal é : " + result + " \n ")
			}

		}enquanto(genero != 3)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 135; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */