programa
{
	inclua biblioteca Matematica

	inteiro numero
	real resultado
	
	funcao inicio()
	{
		escreva("Calculadora de resto Zero\n")
		
		escreva("Digite o numero que deseja verificar : ")
		leia(numero)
		
		se(numero % 2 == 0){
			resultado  = numero / 2
			escreva("O resultado é " + resultado  + " e não sobrou resto")
		}senao{
			escreva("O resultado é " + resultado + " e ele não é um numero exato")
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 417; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */