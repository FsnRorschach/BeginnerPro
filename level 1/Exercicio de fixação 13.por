programa
{
	real nota1, nota2, nota3, media, perc1, perc2,perc3, resultado
	funcao inicio()
	{
		escreva("Digite a nota 1: ")
		leia(nota1)

		escreva("Digite a nota 2: ")
		leia(nota2)

		escreva("Digite a nota 2: ")
		leia(nota3)

		escreva("Digite a média desejada: 1 - Média Aritmética / 2 Média Ponderada \n")
		leia(media)

		se(media == 1){
			resultado = (nota1 + nota2 + nota3)/3

			escreva("O resultado da Média Atitmética é: "+resultado)
		}senao (media == 2){
			resultado = nota1
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 493; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */