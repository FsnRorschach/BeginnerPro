programa
{
	inclua biblioteca Matematica --> mat
	real preco, valor
	
	funcao inicio()
	{
		escreva("Digite o preço do litro da gasolina \n")
		escreva("R$ " )
		leia(preco)

		escreva("Digite o valor que deseja abastacer \n")
		escreva("R$ " ) 
		leia(valor)

		escreva("A quantidade de gasolina é: " +  mat.arredondar(valor / preco, 2))
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 338; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */