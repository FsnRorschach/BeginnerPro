programa
{
	real nota1, nota2, nota3, resultado
	
	funcao inicio()
	{
		escreva("Digite a nota da Prova: \n")
		leia(nota1)

		escreva("Digite a nota dos Exercicios: \n")
		leia(nota2)

		escreva("Digite a nota do Seminário: \n")
		leia(nota3)

		
		resultado = (nota1 * 0.50) + (nota2 * 0.25) + (nota3 * 0.25)

		aprovReprov()
		
	}

	funcao aprovReprov(){
		se(resultado >= 9){
			escreva("O sua nota Final é: " + resultado + " classificada como A, Parabéns você foi Aprovado")
		}senao se(resultado >= 8 e resultado < 9){
			escreva("O sua nota Final é: " + resultado + " classificada como B, Parabéns você foi Aprovado")
		}senao se(resultado >= 6.5 e resultado < 8){
			escreva("O sua nota Final é: " + resultado + " classificada como C, Parabéns você foi Aprovado")
		}senao se(resultado >= 5 e resultado < 6.5){
			escreva("O sua nota Final é: " + resultado + " classificada como D, você foi Reprovado")
		}senao se(resultado <5){
			escreva("O sua nota Final é: " + resultado + " classificada como E, você foi Reprovado")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 813; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */