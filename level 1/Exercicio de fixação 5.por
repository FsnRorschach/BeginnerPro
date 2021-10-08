programa
{
	inclua biblioteca Matematica --> mat
	real Dollar = 0.00, Real = 0.00, result
	cadeia name
	inteiro number
	
	funcao inicio()
	{
		escreva("Calculadora de conversão de Real para Dólar e Dólar para Real \n")
		escreva("Digite o seu nome: ")
		leia(name)

		faca{
			escreva("Digite 1 para Real ==> Dólar e 2 para Dólar para Real: ")
			leia(number)
		}enquanto(number != 1 e number != 2)
		
		
		se(number == 1){
			escreva("Digite o valor em Reais a ser convertido: R$")
			leia(Real)
	
			escreva("Digite o valor corrente do Dólar para conversão: $")
			leia(Dollar)
	
			result = Real / Dollar
	
			result = mat.arredondar(result, 2)
			
			escreva(name + " o valor convertido em Dólar é: $"+result)
		}senao se(number == 2){
			escreva("Digite o valor em Dólar a ser convertido: $")
			leia(Real)
	
			escreva("Digite o valor corrente do Real para conversão: R$")
			leia(Dollar)
	
			result = Real * Dollar
	
			result = mat.arredondar(result, 2)
			
			escreva(name + " o valor convertido em Reais é: R$"+result)
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1041; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */