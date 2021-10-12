programa
{
	inclua biblioteca Matematica --> mat
	
	inteiro tenis, camisetas, bones, resultado
	funcao inicio()
	{
		escreva("Olá , Bem vindo a Loja de Tenis \n")
		
		escreva("Tenis --> R$ 60.00 || Camisetas --> R$ 15.00 ||  Bonés --> 20.00 \n")
		
		escreva("Quantos Tenis deseja comprar? \n")
		leia(tenis)

		escreva("Quantas Camisetas deseja comprar? \n")
		leia(camisetas)

		escreva("Quantos Bonés deseja comprar? \n")
		leia(bones)
	
		escreva("A quantidade de Tenis da sua compra é: " + tenis + " e o valor é: R$ " + tenis * 60 + "\n")
		escreva("A quantidade de Camisetas da sua compra é: " + camisetas + " e o valor é: R$ " + camisetas * 15 + "\n")
		escreva("A quantidade de Bonés da sua compra é: " + bones + " e o valor é: R$ " + bones * 20 + "\n")
		resultado =(tenis * 60.00) + (camisetas * 15.00) + (bones *20.00)
		escreva("O valor total da sua compra é: R$ " + mat.arredondar( resultado,2))
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 908; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */